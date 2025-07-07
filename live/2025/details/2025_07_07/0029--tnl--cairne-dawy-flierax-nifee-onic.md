### Roster Details<br />
Team Name: TNL<br />
Roster: cairne, Dawy, Flierax, nifee, onic<br />
Global Rank: [29](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [21]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1200.5<br />
<br />
Final Rank Value (1200.5) = Starting Rank Value (1199.7) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.353[<sup>2</sup>](#table1)
- LAN Wins: 0.430[<sup>2</sup>](#table1)

The average of these factors is 0.429<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1199.7
- 400 + ( ( 0.429 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 1199.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |       52 | 2025-06-22 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -24.63 | cairne, Dawy, Flierax, nifee, onic     |
|           57 |       55 | 2025-06-22 | fnatic            | W   | 1.000      | 0.480        | 0.110 (0.053)    | 0.665 (0.319)    | 0 (0.000) |    19.33 | cairne, Dawy, Flierax, nifee, onic     |
|           56 |       60 | 2025-06-22 | BC.Game           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.22 | cairne, Dawy, Flierax, nifee, onic     |
|           55 |       72 | 2025-06-21 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -10.14 | cairne, Dawy, Flierax, nifee, onic     |
|           54 |       73 | 2025-06-21 | FAVBET            | W   | 1.000      | 0.435        | -                | 0.742 (0.323)    | 0 (0.000) |     5.01 | cairne, Dawy, Flierax, nifee, onic     |
|           53 |       78 | 2025-06-21 | Betclic           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.65 | cairne, Dawy, Flierax, nifee, onic     |
|           52 |      109 | 2025-06-19 | Monte             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.32 | cairne, Dawy, Flierax, nifee, onic     |
|           51 |      123 | 2025-06-18 | 9INE              | W   | 1.000      | 0.480        | -                | 0.897 (0.430)    | -         |    11.20 | cairne, Dawy, Flierax, nifee, onic     |
|           50 |      191 | 2025-06-14 | ECSTATIC          | L   | 1.000      | -            | -                | -                | -         |   -12.62 | cairne, Dawy, Flierax, nifee, onic     |
|           49 |      199 | 2025-06-14 | WildLotus         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.70 | cairne, Dawy, Flierax, nifee, onic     |
|           48 |      216 | 2025-06-14 | Alliance          | L   | 1.000      | -            | -                | -                | -         |   -24.16 | cairne, Dawy, Flierax, nifee, onic     |
|           47 |      234 | 2025-06-13 | Preasy            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.88 | cairne, Dawy, Flierax, nifee, onic     |
|           46 |      426 | 2025-06-01 | Partizan          | L   | 0.958      | -            | -                | -                | -         |   -25.15 | cairne, Dawy, Flierax, nifee, onic     |
|           45 |      431 | 2025-05-31 | BIG               | W   | 0.953      | 0.435        | 0.175 (0.073)    | -                | -         |    13.44 | cairne, Dawy, Flierax, nifee, onic     |
|           44 |      453 | 2025-05-29 | Iberian Soul      | W   | 0.938      | 0.435        | 0.077 (0.032)    | 0.974 (0.397)    | -         |     8.01 | cairne, Dawy, Flierax, nifee, onic     |
|           43 |      506 | 2025-05-24 | Passion UA        | W   | 0.907      | 0.435        | 0.095 (0.038)    | 0.974 (0.384)    | -         |    12.37 | cairne, Dawy, Flierax, nifee, onic     |
|           42 |      531 | 2025-05-23 | Partizan          | W   | 0.899      | 0.435        | 0.063 (0.025)    | -                | -         |     3.92 | cairne, Dawy, Flierax, nifee, onic     |
|           41 |      600 | 2025-05-20 | Astrum            | W   | 0.879      | 0.435        | -                | 0.927 (0.354)    | -         |     6.64 | cairne, Dawy, Flierax, nifee, onic     |
|           40 |      632 | 2025-05-19 | FAVBET            | W   | 0.871      | -            | -                | -                | -         |     4.42 | cairne, Dawy, Flierax, nifee, onic     |
|           39 |      683 | 2025-05-16 | PARIVISION        | L   | 0.852      | -            | -                | -                | -         |   -17.93 | cairne, Dawy, Flierax, nifee, onic     |
|           38 |      703 | 2025-05-15 | PERPLEXITY        | W   | 0.846      | -            | -                | -                | -         |     1.23 | cairne, Dawy, Flierax, nifee, onic     |
|           37 |      730 | 2025-05-14 | Sangal            | W   | 0.839      | -            | -                | -                | -         |     2.69 | cairne, Dawy, Flierax, nifee, onic     |
|           36 |      820 | 2025-05-11 | ECSTATIC          | W   | 0.819      | 0.435        | 0.129 (0.046)    | 1.000 (0.356)    | -         |    15.06 | cairne, Dawy, Flierax, nifee, onic     |
|           35 |      864 | 2025-05-09 | Iberian Soul      | W   | 0.807      | 0.435        | 0.077 (0.027)    | 0.974 (0.341)    | -         |     7.36 | cairne, Dawy, Flierax, nifee, onic     |
|           34 |      971 | 2025-05-06 | 9INE              | W   | 0.784      | 0.435        | -                | 0.897 (0.306)    | -         |     9.85 | cairne, Dawy, Flierax, nifee, onic     |
|           33 |      985 | 2025-05-05 | TPuDCATb TPu      | W   | 0.779      | -            | -                | -                | -         |     4.28 | cairne, Dawy, Flierax, nifee, onic     |
|           32 |     1000 | 2025-05-04 | ex-SABRE          | W   | 0.773      | -            | -                | -                | -         |     2.79 | cairne, Dawy, Flierax, nifee, onic     |
|           31 |     1025 | 2025-05-03 | FAVBET            | L   | 0.767      | -            | -                | -                | -         |   -20.54 | cairne, Dawy, Flierax, nifee, onic     |
|           30 |     1053 | 2025-05-02 | Marius            | W   | 0.760      | -            | -                | -                | -         |     2.42 | cairne, Dawy, Flierax, nifee, onic     |
|           29 |     1074 | 2025-05-01 | Passion UA        | L   | 0.752      | -            | -                | -                | -         |    -9.67 | cairne, Dawy, Flierax, nifee, onic     |
|           28 |     1101 | 2025-04-30 | ECSTATIC          | W   | 0.746      | 0.435        | 0.129 (0.042)    | 1.000 (0.324)    | -         |    13.89 | cairne, Dawy, Flierax, nifee, onic     |
|           27 |     1155 | 2025-04-28 | Metizport         | W   | 0.732      | -            | -                | -                | -         |     6.14 | cairne, Dawy, Flierax, nifee, onic     |
|           26 |     1175 | 2025-04-27 | Partizan          | W   | 0.725      | -            | -                | -                | -         |     5.19 | cairne, Dawy, Flierax, nifee, onic     |
|           25 |     1262 | 2025-04-22 | Nexus             | W   | 0.694      | 0.435        | 0.087 (0.026)    | -                | -         |     5.04 | cairne, Dawy, Flierax, nifee, onic     |
|           24 |     1280 | 2025-04-21 | NAVI Junior       | L   | 0.685      | -            | -                | -                | -         |   -11.37 | cairne, Dawy, Flierax, nifee, onic     |
|           23 |     1327 | 2025-04-18 | CYBERSHOKE        | L   | 0.666      | -            | -                | -                | -         |   -16.28 | cairne, Dawy, Flierax, nifee, onic     |
|           22 |     1411 | 2025-04-15 | Sangal            | W   | 0.646      | -            | -                | -                | -         |     2.00 | cairne, Dawy, Flierax, nifee, onic     |
|           21 |     1453 | 2025-04-13 | 9INE              | W   | 0.634      | -            | -                | -                | 1 (0.634) |     9.49 | cairne, Dawy, Flierax, nifee, onic     |
|           20 |     1456 | 2025-04-13 | Johnny Speeds     | W   | 0.633      | -            | -                | -                | 1 (0.633) |     5.10 | cairne, Dawy, Flierax, nifee, onic     |
|           19 |     1461 | 2025-04-13 | Ninjas in Pyjamas | W   | 0.631      | 0.310        | 0.153 (0.030)    | -                | 1 (0.631) |    14.85 | cairne, Dawy, Flierax, nifee, onic     |
|           18 |     1490 | 2025-04-11 | LA MASIA          | W   | 0.620      | -            | -                | -                | -         |     1.12 | cairne, Dawy, Flierax, nifee, onic     |
|           17 |     1866 | 2025-03-30 | BetBoom           | L   | 0.539      | -            | -                | -                | -         |    -9.71 | cairne, Dawy, Flierax, nifee, onic     |
|           16 |     1907 | 2025-03-29 | Metizport         | L   | 0.534      | -            | -                | -                | -         |   -13.37 | cairne, Dawy, Flierax, nifee, onic     |
|           15 |     1980 | 2025-03-28 | Monte             | W   | 0.527      | -            | -                | -                | -         |     1.69 | cairne, Dawy, Flierax, nifee, onic     |
|           14 |     2061 | 2025-03-27 | BetBoom           | W   | 0.519      | -            | -                | -                | -         |     6.50 | cairne, Dawy, Flierax, nifee, onic     |
|           13 |     2207 | 2025-03-22 | Leo               | W   | 0.488      | -            | -                | -                | -         |     0.66 | cairne, Dawy, Flierax, nifee, onic     |
|           12 |     2210 | 2025-03-22 | EYEBALLERS        | W   | 0.488      | -            | -                | -                | -         |     0.70 | cairne, Dawy, Flierax, nifee, onic     |
|           11 |     2217 | 2025-03-22 | Lazer Cats        | W   | 0.487      | -            | -                | -                | -         |     0.21 | cairne, Dawy, Flierax, nifee, onic     |
|           10 |     2223 | 2025-03-22 | Illuminar         | W   | 0.486      | -            | -                | -                | -         |     0.41 | cairne, Dawy, Flierax, nifee, onic     |
|            9 |     2403 | 2025-03-15 | Mercenaires       | L   | 0.441      | -            | -                | -                | -         |   -13.54 | cairne, Dawy, Flierax, nifee, onic     |
|            8 |     2414 | 2025-03-15 | Lausanne          | W   | 0.440      | -            | -                | -                | -         |     0.27 | cairne, Dawy, Flierax, nifee, onic     |
|            7 |     2420 | 2025-03-15 | RUSTEC            | W   | 0.439      | -            | -                | -                | -         |     0.17 | cairne, Dawy, Flierax, nifee, onic     |
|            6 |     3110 | 2025-02-23 | Inner Circle      | L   | 0.306      | -            | -                | -                | -         |    -9.43 | cairne, Dawy, Flierax, nifee, onic     |
|            5 |     3449 | 2025-02-10 | Nemiga            | L   | 0.220      | -            | -                | -                | -         |    -3.12 | cairne, Dawy, Flierax, nifee, onic     |
|            4 |     3457 | 2025-02-10 | Falcons           | L   | 0.219      | -            | -                | -                | -         |    -0.24 | cairne, Dawy, Flierax, nifee, onic     |
|            3 |     3514 | 2025-02-08 | LFO 3             | W   | 0.208      | -            | -                | -                | -         |     0.13 | cairne, Dawy, Flierax, nifee, s-chilla |
|            2 |     3532 | 2025-02-08 | OG                | L   | 0.207      | -            | -                | -                | -         |    -4.58 | cairne, Dawy, Flierax, nifee, s-chilla |
|            1 |     3539 | 2025-02-08 | CYBERSHOKE        | W   | 0.207      | -            | -                | -                | -         |     1.05 | cairne, Dawy, Flierax, nifee, s-chilla |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($57,280.13)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-24 |      1.000 | $1,500.00      | $1,500.00       |
| 2025-06-22 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-06-22 |      1.000 | $38,500.00     | $38,500.00      |
| 2025-06-15 |      1.000 | $316.00        | $316.00         |
| 2025-06-01 |      0.960 | $5,000.00      | $4,799.38       |
| 2025-05-01 |      0.752 | $11,000.00     | $8,277.17       |
| 2025-04-13 |      0.634 | $2,978.00      | $1,887.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
