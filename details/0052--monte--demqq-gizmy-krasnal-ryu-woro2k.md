### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, Gizmy, kRaSnaL, ryu, Woro2k<br />
Global Rank: [52](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [39]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1046.5<br />
<br />
Final Rank Value (1046.5) = Starting Rank Value (1011.4) + Head To Head Adjustments (35.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.453[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1011.4
- 400 + ( ( 0.296 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1011.4


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
|           35 |     2155 | 2024-05-07 | FaZe              | L   | 0.633      | -            | -                | -                | -         |    -0.37 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           34 |     2195 | 2024-05-05 | FURIA             | W   | 0.619      | 0.889        | 0.286 (0.158)    | 0.495 (0.273)    | 1 (0.619) |    18.89 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           33 |     2216 | 2024-05-04 | FORZE             | W   | 0.612      | 0.889        | 0.060 (0.033)    | 0.189 (0.102)    | 1 (0.612) |     7.86 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           32 |     2249 | 2024-05-02 | ENCE              | L   | 0.600      | -            | -                | -                | -         |    -1.85 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           31 |     2270 | 2024-05-01 | Liquid            | L   | 0.593      | -            | -                | -                | -         |    -1.41 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           30 |     2296 | 2024-04-30 | FORZE             | W   | 0.586      | 0.889        | 0.060 (0.031)    | 0.189 (0.098)    | 1 (0.586) |     7.51 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           29 |     2549 | 2024-04-19 | OG                | L   | 0.514      | -            | -                | -                | -         |    -6.96 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           28 |     2617 | 2024-04-18 | paiN              | L   | 0.505      | -            | -                | -                | -         |    -1.57 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           27 |     2736 | 2024-04-13 | Rebels            | W   | 0.472      | 0.500        | 0.041 (0.010)    | 0.596 (0.141)    | 0 (0.000) |     7.27 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           26 |     2751 | 2024-04-12 | Sangal            | W   | 0.466      | 0.500        | 0.221 (0.051)    | 0.824 (0.192)    | 0 (0.000) |     9.54 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           25 |     3040 | 2024-04-03 | Metizport         | L   | 0.407      | -            | -                | -                | -         |    -7.74 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           24 |     3056 | 2024-04-03 | Apeks             | W   | 0.405      | -            | -                | -                | 0 (0.000) |     5.00 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           23 |     3081 | 2024-04-02 | GamerLegion       | W   | 0.400      | 0.143        | 0.177 (0.010)    | 0.273 (0.016)    | 0 (0.000) |     8.64 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           22 |     3091 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.399      | -            | -                | -                | -         |    -0.33 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           21 |     3116 | 2024-03-31 | RUSH B            | L   | 0.386      | -            | -                | -                | -         |    -8.61 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           20 |     3146 | 2024-03-28 | Betera            | L   | 0.366      | -            | -                | -                | -         |    -9.83 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           19 |     3214 | 2024-03-26 | System5           | W   | 0.353      | 0.500        | -                | 0.086 (0.015)    | 0 (0.000) |     1.46 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           18 |     3442 | 2024-03-13 | PERA              | W   | 0.267      | 0.500        | 0.048 (0.006)    | 0.452 (0.060)    | -         |     3.15 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           17 |     3546 | 2024-03-09 | Metizport         | L   | 0.239      | -            | -                | -                | -         |    -4.82 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           16 |     3585 | 2024-03-07 | Imperial          | W   | 0.227      | 0.535        | 0.245 (0.030)    | 0.685 (0.083)    | -         |     5.93 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           15 |     3656 | 2024-03-05 | SAW               | L   | 0.213      | -            | -                | -                | -         |    -1.88 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           14 |     3722 | 2024-03-03 | Gaimin Gladiators | L   | 0.197      | -            | -                | -                | -         |    -3.35 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           13 |     3727 | 2024-03-02 | 3DMAX             | L   | 0.193      | -            | -                | -                | -         |    -0.14 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           12 |     3770 | 2024-02-29 | PARIVISION        | W   | 0.178      | 0.500        | -                | 0.452 (0.040)    | -         |     3.43 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           11 |     3938 | 2024-02-21 | Astralis          | L   | 0.125      | -            | -                | -                | -         |    -0.09 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           10 |     3968 | 2024-02-20 | Apeks             | L   | 0.117      | -            | -                | -                | -         |    -2.32 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            9 |     3984 | 2024-02-19 | Nexus             | W   | 0.113      | -            | -                | -                | 1 (0.113) |     0.97 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|            8 |     3993 | 2024-02-19 | Gaimin Gladiators | L   | 0.111      | -            | -                | -                | -         |    -1.92 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|            7 |     4002 | 2024-02-18 | Aurora            | W   | 0.107      | 0.143        | 0.433 (0.007)    | -                | -         |     3.30 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            6 |     4005 | 2024-02-18 | SINNERS           | W   | 0.106      | -            | -                | -                | -         |     1.80 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            5 |     4033 | 2024-02-17 | Aurora            | W   | 0.099      | 0.143        | 0.433 (0.006)    | -                | -         |     3.04 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            4 |     4038 | 2024-02-17 | The Chosen Few    | W   | 0.098      | -            | -                | -                | -         |     0.41 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            3 |     4237 | 2024-02-06 | G2                | L   | 0.025      | -            | -                | -                | -         |    -0.00 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            2 |     4247 | 2024-02-05 | Cloud9            | W   | 0.018      | -            | -                | -                | 1 (0.018) |     0.33 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            1 |     4270 | 2024-02-04 | GamerLegion       | L   | 0.011      | -            | -                | -                | -         |    -0.28 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,468.36)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.853 | $4,000.00      | $3,412.37       |
| 2024-05-12 |      0.666 | $17,500.00     | $11,650.32      |
| 2024-04-20 |      0.521 | $5,000.00      | $2,603.39       |
| 2024-03-10 |      0.247 | $7,500.00      | $1,851.52       |
| 2024-02-11 |      0.059 | $16,000.00     | $950.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
