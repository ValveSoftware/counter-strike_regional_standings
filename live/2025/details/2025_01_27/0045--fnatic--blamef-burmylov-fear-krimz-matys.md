### Roster Details<br />
Team Name: fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, MATYS<br />
Global Rank: [45](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [32]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1108.9<br />
<br />
Final Rank Value (1108.9) = Starting Rank Value (1118.0) + Head To Head Adjustments (-9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.571[<sup>1</sup>](#table2)
- Bounty Collected: 0.378[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.465[<sup>2</sup>](#table1)

The average of these factors is 0.367<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1118.0
- 400 + ( ( 0.367 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1118.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      223 | 2025-01-14 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -0.30 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           32 |      688 | 2024-12-01 | Rare Atom         | L   | 0.817      | -            | -                | -                | -         |   -17.36 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           31 |      720 | 2024-11-30 | Cloud9            | L   | 0.811      | -            | -                | -                | -         |   -14.38 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           30 |      723 | 2024-11-29 | Wildcard          | L   | 0.810      | -            | -                | -                | -         |    -6.71 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           29 |      914 | 2024-11-20 | ECLOT             | W   | 0.744      | 0.143        | 0.287 (0.030)    | 0.994 (0.106)    | 1 (0.744) |    13.04 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           28 |      924 | 2024-11-19 | FaZe              | L   | 0.738      | -            | -                | -                | -         |    -0.51 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           27 |      938 | 2024-11-17 | BetBoom           | W   | 0.730      | 0.143        | 0.227 (0.024)    | 0.524 (0.055)    | 1 (0.730) |    12.09 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           26 |      956 | 2024-11-17 | Rebels            | W   | 0.725      | 0.143        | 0.033 (0.003)    | 0.330 (0.034)    | 1 (0.725) |     4.30 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           25 |      968 | 2024-11-16 | Natus Vincere     | L   | 0.723      | -            | -                | -                | -         |    -0.55 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           24 |     1458 | 2024-10-26 | Falcons           | L   | 0.579      | -            | -                | -                | -         |    -0.64 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           23 |     1485 | 2024-10-25 | Cloud9            | W   | 0.572      | 0.477        | 0.070 (0.019)    | 0.318 (0.087)    | 0 (0.000) |     7.33 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           22 |     1512 | 2024-10-22 | The MongolZ       | L   | 0.554      | -            | -                | -                | -         |    -0.39 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           21 |     1515 | 2024-10-22 | 9z                | W   | 0.553      | 0.477        | 0.054 (0.014)    | 0.178 (0.047)    | 0 (0.000) |     5.17 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           20 |     1580 | 2024-10-19 | Nemiga            | L   | 0.532      | -            | -                | -                | -         |    -5.63 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           19 |     1621 | 2024-10-17 | PARIVISION        | W   | 0.520      | 0.624        | 0.020 (0.007)    | 0.266 (0.086)    | 1 (0.520) |     3.59 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           18 |     1654 | 2024-10-16 | UNPAID            | W   | 0.514      | 0.624        | 0.138 (0.044)    | 0.187 (0.060)    | 1 (0.514) |     5.14 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           17 |     1747 | 2024-10-10 | Metizport         | L   | 0.472      | -            | -                | -                | -         |    -3.83 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           16 |     2342 | 2024-09-24 | Into the Breach   | L   | 0.366      | -            | -                | -                | -         |    -8.99 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           15 |     2641 | 2024-09-14 | MOUZ              | L   | 0.299      | -            | -                | -                | -         |    -0.27 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           14 |     2693 | 2024-09-12 | BIG               | L   | 0.287      | -            | -                | -                | -         |    -1.84 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           13 |     2720 | 2024-09-11 | M80               | L   | 0.281      | -            | -                | -                | -         |    -4.16 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           12 |     2764 | 2024-09-10 | Astralis          | W   | 0.272      | 0.889        | 0.318 (0.077)    | 0.232 (0.056)    | 1 (0.272) |     6.02 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           11 |     3090 | 2024-08-29 | ECSTATIC          | L   | 0.193      | -            | -                | -                | -         |    -4.38 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           10 |     3184 | 2024-08-27 | Falcons           | L   | 0.181      | -            | -                | -                | -         |    -0.17 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            9 |     3196 | 2024-08-27 | Cloud9            | W   | 0.179      | 0.143        | 0.070 (0.002)    | 0.318 (0.008)    | 0 (0.000) |     2.21 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            8 |     3257 | 2024-08-26 | OG                | W   | 0.174      | 0.143        | 0.168 (0.004)    | -                | 0 (0.000) |     1.42 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            7 |     3269 | 2024-08-26 | 3DMAX             | L   | 0.173      | -            | -                | -                | -         |    -1.07 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            6 |     3621 | 2024-08-15 | QUAZAR            | W   | 0.101      | -            | -                | -                | -         |     0.21 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            5 |     3627 | 2024-08-15 | Gaimin Gladiators | W   | 0.100      | 0.143        | -                | 0.874 (0.013)    | -         |     0.80 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            4 |     3637 | 2024-08-15 | Rebels            | W   | 0.100      | -            | -                | -                | -         |     0.55 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            3 |     4018 | 2024-08-03 | 3DMAX             | L   | 0.021      | -            | -                | -                | -         |    -0.12 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            2 |     4069 | 2024-08-02 | Nemiga            | W   | 0.012      | -            | -                | -                | -         |     0.26 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            1 |     4101 | 2024-08-01 | G2 Ares           | W   | 0.006      | -            | -                | -                | -         |     0.01 | afro, blameF, bodyy, KRIMZ, MATYS    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,156.42)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.832 | $10,000.00     | $8,315.36       |
| 2024-10-26 |      0.581 | $20,000.00     | $11,627.24      |
| 2024-10-19 |      0.534 | $25,000.00     | $13,355.44      |
| 2024-09-26 |      0.380 | $1,000.00      | $379.99         |
| 2024-09-22 |      0.354 | $7,000.00      | $2,478.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
