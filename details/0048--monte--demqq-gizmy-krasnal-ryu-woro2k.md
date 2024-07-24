### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, Gizmy, kRaSnaL, ryu, Woro2k<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [48](../standings_global.md)<br />
Regional Rank: [35]( ../standings_europe.md)<br />
Final Rank Value:  1082.0<br />
<br />
Final Rank Value (1082.0) = Starting Rank Value (1052.5) + Head To Head Adjustments (29.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.480[<sup>1</sup>](#table2)
- Bounty Collected: 0.426[<sup>2</sup>](#table1)
- Opponent Network: 0.125[<sup>2</sup>](#table1)
- LAN Wins: 0.258[<sup>2</sup>](#table1)

The average of these factors is 0.322<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1052.5
- 400 + ( ( 0.322 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1052.5


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
|           35 |     1913 | 2024-05-07 | FaZe              | L   | 0.681      | -            | -                | -                | -         |    -0.35 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           34 |     1953 | 2024-05-05 | FURIA             | W   | 0.666      | 0.889        | 0.355 (0.210)    | 0.563 (0.333)    | 1 (0.666) |    20.33 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           33 |     1974 | 2024-05-04 | FORZE             | W   | 0.659      | 0.889        | 0.078 (0.046)    | 0.233 (0.136)    | 1 (0.659) |     8.27 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           32 |     2007 | 2024-05-02 | ENCE              | L   | 0.647      | -            | -                | -                | -         |    -3.34 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           31 |     2028 | 2024-05-01 | Liquid            | L   | 0.640      | -            | -                | -                | -         |    -1.85 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           30 |     2054 | 2024-04-30 | FORZE             | W   | 0.634      | 0.889        | 0.078 (0.044)    | 0.233 (0.131)    | 1 (0.634) |     7.86 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           29 |     2307 | 2024-04-19 | OG                | L   | 0.561      | -            | -                | -                | -         |    -7.58 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           28 |     2375 | 2024-04-18 | paiN              | L   | 0.553      | -            | -                | -                | -         |    -1.60 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           27 |     2494 | 2024-04-13 | Rebels            | W   | 0.520      | 0.500        | 0.053 (0.014)    | 0.661 (0.172)    | 0 (0.000) |     7.65 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           26 |     2509 | 2024-04-12 | Sangal            | W   | 0.513      | 0.500        | 0.195 (0.050)    | 0.860 (0.220)    | 0 (0.000) |     8.77 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           25 |     2798 | 2024-04-03 | Metizport         | L   | 0.454      | -            | -                | -                | -         |    -8.94 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           24 |     2814 | 2024-04-03 | Apeks             | W   | 0.452      | -            | -                | -                | 0 (0.000) |     5.49 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           23 |     2839 | 2024-04-02 | GamerLegion       | W   | 0.447      | 0.143        | 0.205 (0.013)    | 0.309 (0.020)    | 0 (0.000) |     9.44 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           22 |     2849 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.446      | -            | -                | -                | -         |    -0.30 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           21 |     2874 | 2024-03-31 | RUSH B            | L   | 0.433      | -            | -                | -                | -         |   -10.37 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           20 |     2904 | 2024-03-28 | Betera            | L   | 0.413      | -            | -                | -                | -         |   -11.37 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           19 |     2972 | 2024-03-26 | System5           | W   | 0.401      | 0.500        | -                | 0.099 (0.020)    | 0 (0.000) |     1.41 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           18 |     3200 | 2024-03-13 | PERA              | W   | 0.314      | 0.500        | 0.061 (0.010)    | 0.462 (0.073)    | -         |     3.36 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           17 |     3304 | 2024-03-09 | Metizport         | L   | 0.286      | -            | -                | -                | -         |    -6.00 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           16 |     3343 | 2024-03-07 | Imperial          | W   | 0.275      | 0.535        | 0.317 (0.047)    | 0.653 (0.096)    | -         |     7.35 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           15 |     3414 | 2024-03-05 | SAW               | L   | 0.261      | -            | -                | -                | -         |    -2.61 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           14 |     3480 | 2024-03-03 | Gaimin Gladiators | L   | 0.245      | -            | -                | -                | -         |    -4.15 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           13 |     3485 | 2024-03-02 | 3DMAX             | L   | 0.240      | -            | -                | -                | -         |    -2.12 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           12 |     3528 | 2024-02-29 | PARIVISION        | W   | 0.226      | 0.500        | -                | 0.429 (0.048)    | -         |     3.38 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           11 |     3696 | 2024-02-21 | Astralis          | L   | 0.172      | -            | -                | -                | -         |    -0.12 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           10 |     3726 | 2024-02-20 | Apeks             | L   | 0.165      | -            | -                | -                | -         |    -3.30 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            9 |     3742 | 2024-02-19 | Nexus             | W   | 0.160      | -            | -                | -                | 1 (0.160) |     1.21 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|            8 |     3751 | 2024-02-19 | Gaimin Gladiators | L   | 0.158      | -            | -                | -                | -         |    -2.76 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|            7 |     3760 | 2024-02-18 | Aurora            | W   | 0.154      | 0.143        | 0.423 (0.009)    | -                | -         |     4.64 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            6 |     3763 | 2024-02-18 | SINNERS           | W   | 0.153      | -            | -                | -                | -         |     2.38 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            5 |     3791 | 2024-02-17 | Aurora            | W   | 0.146      | 0.143        | 0.423 (0.009)    | -                | -         |     4.40 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            4 |     3796 | 2024-02-17 | The Chosen Few    | W   | 0.145      | -            | -                | -                | -         |     0.51 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            3 |     3995 | 2024-02-06 | G2                | L   | 0.072      | -            | -                | -                | -         |    -0.01 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            2 |     4005 | 2024-02-05 | Cloud9            | W   | 0.065      | -            | -                | -                | 1 (0.065) |     1.21 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            1 |     4028 | 2024-02-04 | GamerLegion       | L   | 0.059      | -            | -                | -                | -         |    -1.41 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,832.74)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $4,000.00      | $3,601.52       |
| 2024-05-12 |      0.713 | $17,500.00     | $12,477.85      |
| 2024-04-20 |      0.568 | $5,000.00      | $2,839.83       |
| 2024-03-10 |      0.294 | $7,500.00      | $2,206.18       |
| 2024-02-11 |      0.107 | $16,000.00     | $1,707.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
