### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, Gizmy, kRaSnaL, ryu, Woro2k<br />
Global Rank: [58](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1020.4<br />
<br />
Final Rank Value (1020.4) = Starting Rank Value (984.6) + Head To Head Adjustments (35.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.445[<sup>1</sup>](#table2)
- Bounty Collected: 0.397[<sup>2</sup>](#table1)
- Opponent Network: 0.089[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 984.6
- 400 + ( ( 0.284 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 984.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |     2363 | 2024-05-07 | FaZe              | L   | 0.594      | -            | -                | -                | -         |    -0.37 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           31 |     2403 | 2024-05-05 | FURIA             | W   | 0.580      | 0.889        | 0.284 (0.146)    | 0.468 (0.241)    | 1 (0.580) |    17.73 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           30 |     2424 | 2024-05-04 | FORZE             | W   | 0.572      | 0.889        | 0.057 (0.029)    | 0.163 (0.083)    | 1 (0.572) |     7.48 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           29 |     2457 | 2024-05-02 | ENCE              | L   | 0.560      | -            | -                | -                | -         |    -1.58 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           28 |     2478 | 2024-05-01 | Liquid            | L   | 0.554      | -            | -                | -                | -         |    -0.60 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           27 |     2504 | 2024-04-30 | FORZE             | W   | 0.547      | 0.889        | 0.057 (0.028)    | 0.163 (0.080)    | 1 (0.547) |     7.15 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           26 |     2757 | 2024-04-19 | OG                | L   | 0.474      | -            | -                | -                | -         |    -6.38 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           25 |     2825 | 2024-04-18 | paiN              | L   | 0.466      | -            | -                | -                | -         |    -1.42 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           24 |     2944 | 2024-04-13 | Rebels            | W   | 0.433      | 0.500        | 0.038 (0.008)    | 0.578 (0.125)    | 0 (0.000) |     6.99 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           23 |     2959 | 2024-04-12 | Sangal            | W   | 0.426      | 0.500        | 0.219 (0.047)    | 0.846 (0.180)    | 0 (0.000) |     9.46 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           22 |     3248 | 2024-04-03 | Metizport         | L   | 0.367      | -            | -                | -                | -         |    -6.70 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           21 |     3264 | 2024-04-03 | Apeks             | W   | 0.366      | -            | -                | -                | 0 (0.000) |     4.49 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           20 |     3289 | 2024-04-02 | GamerLegion       | W   | 0.361      | 0.143        | 0.173 (0.009)    | 0.259 (0.013)    | 0 (0.000) |     7.88 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           19 |     3299 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.360      | -            | -                | -                | -         |    -0.21 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           18 |     3324 | 2024-03-31 | RUSH B            | L   | 0.347      | -            | -                | -                | -         |    -7.18 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           17 |     3354 | 2024-03-28 | Betera            | L   | 0.327      | -            | -                | -                | -         |    -8.61 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           16 |     3422 | 2024-03-26 | System5           | W   | 0.314      | 0.500        | -                | 0.081 (0.013)    | 0 (0.000) |     1.45 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           15 |     3650 | 2024-03-13 | PERA              | W   | 0.228      | 0.500        | 0.047 (0.005)    | 0.435 (0.050)    | 0 (0.000) |     2.94 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           14 |     3754 | 2024-03-09 | Metizport         | L   | 0.200      | -            | -                | -                | -         |    -3.83 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           13 |     3793 | 2024-03-07 | Imperial          | W   | 0.188      | 0.535        | 0.233 (0.023)    | 0.658 (0.066)    | -         |     4.87 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           12 |     3864 | 2024-03-05 | SAW               | L   | 0.174      | -            | -                | -                | -         |    -1.51 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           11 |     3930 | 2024-03-03 | Gaimin Gladiators | L   | 0.158      | -            | -                | -                | -         |    -2.69 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           10 |     3935 | 2024-03-02 | 3DMAX             | L   | 0.154      | -            | -                | -                | -         |    -0.10 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|            9 |     3978 | 2024-02-29 | PARIVISION        | W   | 0.139      | 0.500        | -                | 0.590 (0.041)    | -         |     2.92 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|            8 |     4146 | 2024-02-21 | Astralis          | L   | 0.085      | -            | -                | -                | -         |    -0.04 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            7 |     4176 | 2024-02-20 | Apeks             | L   | 0.078      | -            | -                | -                | -         |    -1.54 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            6 |     4192 | 2024-02-19 | Nexus             | W   | 0.073      | -            | -                | -                | 1 (0.073) |     0.70 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|            5 |     4201 | 2024-02-19 | Gaimin Gladiators | L   | 0.072      | -            | -                | -                | -         |    -1.24 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|            4 |     4210 | 2024-02-18 | Aurora            | W   | 0.068      | 0.143        | 0.420 (0.004)    | -                | -         |     2.09 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            3 |     4213 | 2024-02-18 | SINNERS           | W   | 0.067      | -            | -                | -                | -         |     1.53 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            2 |     4241 | 2024-02-17 | Aurora            | W   | 0.059      | 0.143        | 0.420 (0.004)    | -                | -         |     1.84 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            1 |     4246 | 2024-02-17 | The Chosen Few    | W   | 0.059      | -            | -                | -                | -         |     0.27 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,186.00)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.814 | $4,000.00      | $3,255.71       |
| 2024-05-12 |      0.627 | $17,500.00     | $10,964.94      |
| 2024-04-20 |      0.482 | $5,000.00      | $2,407.57       |
| 2024-03-10 |      0.208 | $7,500.00      | $1,557.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
