### Roster Details<br />
Team Name: Wildcard<br />
Roster: JBa, phzy, Sonic, stanislaw, susp<br />
Global Rank: [24](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [18]( ../../standings_europe_2024_12_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_02.md)<br />
Regional Rank: [6]( ../../standings_americas_2024_12_02.md)<br />
<br />
Final Rank Value:  1312.0<br />
<br />
Final Rank Value (1312.0) = Starting Rank Value (1305.5) + Head To Head Adjustments (6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.457[<sup>1</sup>](#table2)
- Bounty Collected: 0.397[<sup>2</sup>](#table1)
- Opponent Network: 0.156[<sup>2</sup>](#table1)
- LAN Wins: 0.794[<sup>2</sup>](#table1)

The average of these factors is 0.451<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1305.5
- 400 + ( ( 0.451 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1305.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           70 |        4 | 2024-12-02 | Virtus.pro       | W   | 1.000      | 0.143        | 0.217 (0.031)    | -                | 1 (1.000) |    21.12 | JBa, phzy, Sonic, stanislaw, susp    |
|           69 |       28 | 2024-11-30 | FURIA            | L   | 1.000      | -            | -                | -                | -         |    -6.20 | JBa, phzy, Sonic, stanislaw, susp    |
|           68 |       52 | 2024-11-30 | Liquid           | L   | 1.000      | -            | -                | -                | -         |    -5.26 | JBa, phzy, Sonic, stanislaw, susp    |
|           67 |       61 | 2024-11-29 | fnatic           | W   | 1.000      | 0.143        | 0.215 (0.031)    | -                | 1 (1.000) |    16.18 | JBa, phzy, Sonic, stanislaw, susp    |
|           66 |      428 | 2024-11-13 | 9z               | W   | 1.000      | 0.143        | 0.084 (0.012)    | -                | 1 (1.000) |    10.65 | JBa, phzy, Sonic, stanislaw, susp    |
|           65 |      456 | 2024-11-12 | paiN             | W   | 1.000      | 0.143        | 0.199 (0.028)    | -                | 1 (1.000) |    24.28 | JBa, phzy, Sonic, stanislaw, susp    |
|           64 |      469 | 2024-11-11 | Liquid           | W   | 1.000      | 0.143        | 0.213 (0.030)    | -                | 1 (1.000) |    27.37 | JBa, phzy, Sonic, stanislaw, susp    |
|           63 |      952 | 2024-10-17 | NRG              | L   | 0.896      | -            | -                | -                | -         |   -21.69 | JBa, phzy, Sonic, stanislaw, susp    |
|           62 |      981 | 2024-10-16 | BOSS             | W   | 0.890      | 0.477        | 0.031 (0.013)    | 0.350 (0.148)    | 0 (0.000) |     4.40 | JBa, phzy, Sonic, stanislaw, susp    |
|           61 |     1008 | 2024-10-15 | Nouns            | L   | 0.883      | -            | -                | -                | -         |   -20.98 | JBa, phzy, Sonic, stanislaw, susp    |
|           60 |     1203 | 2024-10-06 | FlyQuest         | L   | 0.820      | -            | -                | -                | -         |    -7.09 | fr3nd, JBa, Sonic, stanislaw, susp   |
|           59 |     1228 | 2024-10-05 | M80              | W   | 0.814      | 0.500        | 0.155 (0.063)    | 0.585 (0.238)    | 1 (0.814) |    14.49 | fr3nd, JBa, Sonic, stanislaw, susp   |
|           58 |     1256 | 2024-10-04 | ODDIK            | W   | 0.809      | 0.500        | 0.105 (0.043)    | 0.541 (0.219)    | 1 (0.809) |     6.02 | fr3nd, JBa, Sonic, stanislaw, susp   |
|           57 |     1266 | 2024-10-04 | M80              | L   | 0.808      | -            | -                | -                | -         |   -10.58 | fr3nd, JBa, Sonic, stanislaw, susp   |
|           56 |     1368 | 2024-10-01 | BOSS             | W   | 0.790      | 0.477        | -                | 0.350 (0.132)    | 0 (0.000) |     2.66 | JBa, phzy, Sonic, stanislaw, susp    |
|           55 |     1373 | 2024-10-01 | BOSS             | W   | 0.789      | 0.477        | -                | 0.350 (0.132)    | -         |     2.73 | JBa, phzy, Sonic, stanislaw, susp    |
|           54 |     1434 | 2024-09-29 | Legacy           | L   | 0.777      | -            | -                | -                | -         |   -16.83 | JBa, phzy, Sonic, stanislaw, susp    |
|           53 |     1461 | 2024-09-28 | Legacy           | W   | 0.770      | -            | -                | -                | -         |     7.20 | JBa, phzy, Sonic, stanislaw, susp    |
|           52 |     1469 | 2024-09-28 | Marca Registrada | W   | 0.768      | -            | -                | -                | -         |     0.40 | JBa, phzy, Sonic, stanislaw, susp    |
|           51 |     1806 | 2024-09-19 | NRG              | L   | 0.709      | -            | -                | -                | -         |   -18.05 | JBa, phzy, Sonic, stanislaw, susp    |
|           50 |     1810 | 2024-09-19 | NRG              | L   | 0.709      | -            | -                | -                | -         |   -18.72 | JBa, phzy, Sonic, stanislaw, susp    |
|           49 |     1840 | 2024-09-18 | E-Xolos LAZER    | W   | 0.703      | -            | -                | -                | -         |     1.15 | JBa, phzy, Sonic, stanislaw, susp    |
|           48 |     1846 | 2024-09-18 | Revenge Nation   | W   | 0.702      | -            | -                | -                | -         |     0.69 | JBa, phzy, Sonic, stanislaw, susp    |
|           47 |     1848 | 2024-09-18 | Revenge Nation   | W   | 0.702      | -            | -                | -                | -         |     0.69 | JBa, phzy, Sonic, stanislaw, susp    |
|           46 |     2172 | 2024-09-07 | 3DMAX            | L   | 0.627      | -            | -                | -                | -         |    -4.59 | JBa, phzy, Sonic, stanislaw, susp    |
|           45 |     2191 | 2024-09-06 | KOI              | W   | 0.621      | 0.889        | 0.038 (0.021)    | 0.287 (0.159)    | 1 (0.621) |     2.01 | JBa, phzy, Sonic, stanislaw, susp    |
|           44 |     2237 | 2024-09-05 | 9z               | L   | 0.613      | -            | -                | -                | -         |   -13.34 | JBa, phzy, Sonic, stanislaw, susp    |
|           43 |     2277 | 2024-09-04 | Spirit           | L   | 0.606      | -            | -                | -                | -         |    -0.69 | JBa, phzy, Sonic, stanislaw, susp    |
|           42 |     2375 | 2024-08-30 | NRG              | W   | 0.576      | -            | -                | -                | -         |     2.44 | JBa, phzy, Sonic, stanislaw, susp    |
|           41 |     2401 | 2024-08-29 | NRG              | W   | 0.570      | -            | -                | -                | -         |     2.34 | JBa, phzy, Sonic, stanislaw, susp    |
|           40 |     2406 | 2024-08-29 | Party Astronauts | W   | 0.569      | -            | -                | -                | -         |     1.43 | JBa, phzy, Sonic, stanislaw, susp    |
|           39 |     2524 | 2024-08-27 | BOSS             | W   | 0.554      | -            | -                | -                | -         |     1.46 | JBa, phzy, Sonic, stanislaw, susp    |
|           38 |     2570 | 2024-08-26 | E-Xolos LAZER    | W   | 0.549      | -            | -                | -                | -         |     0.80 | JBa, phzy, Sonic, stanislaw, susp    |
|           37 |     2597 | 2024-08-26 | Mythic           | W   | 0.547      | -            | -                | -                | -         |     0.50 | JBa, phzy, Sonic, stanislaw, susp    |
|           36 |     2755 | 2024-08-21 | Legacy           | W   | 0.516      | 0.477        | -                | 0.597 (0.147)    | -         |     2.96 | JBa, phzy, Sonic, stanislaw, susp    |
|           35 |     2757 | 2024-08-21 | Legacy           | W   | 0.516      | 0.477        | -                | 0.597 (0.147)    | -         |     3.04 | JBa, phzy, Sonic, stanislaw, susp    |
|           34 |     2887 | 2024-08-18 | Nouns            | W   | 0.497      | -            | -                | -                | -         |     2.79 | JBa, phzy, Sonic, stanislaw, susp    |
|           33 |     2890 | 2024-08-18 | M80              | W   | 0.495      | 0.371        | 0.155 (0.028)    | -                | -         |     9.16 | JBa, phzy, Sonic, stanislaw, susp    |
|           32 |     2902 | 2024-08-17 | NRG              | W   | 0.490      | -            | -                | -                | -         |     2.22 | JBa, phzy, Sonic, stanislaw, susp    |
|           31 |     3013 | 2024-08-13 | FLUFFY AIMERS    | W   | 0.462      | -            | -                | -                | -         |     0.77 | JBa, phzy, Sonic, stanislaw, susp    |
|           30 |     3017 | 2024-08-13 | FLUFFY AIMERS    | W   | 0.462      | -            | -                | -                | -         |     0.78 | JBa, phzy, Sonic, stanislaw, susp    |
|           29 |     3056 | 2024-08-12 | Nouns            | W   | 0.456      | 0.477        | -                | 0.550 (0.120)    | -         |     2.55 | JBa, phzy, Sonic, stanislaw, susp    |
|           28 |     3057 | 2024-08-12 | Nouns            | W   | 0.456      | 0.477        | -                | 0.550 (0.120)    | -         |     2.61 | JBa, phzy, Sonic, stanislaw, susp    |
|           27 |     3255 | 2024-08-06 | Mythic           | L   | 0.416      | -            | -                | -                | -         |   -12.71 | JBa, phzy, Sonic, stanislaw, susp    |
|           26 |     3259 | 2024-08-06 | Mythic           | W   | 0.416      | -            | -                | -                | -         |     0.39 | JBa, phzy, Sonic, stanislaw, susp    |
|           25 |     3316 | 2024-08-04 | NRG              | L   | 0.402      | -            | -                | -                | -         |   -11.22 | JBa, phzy, Sonic, stanislaw, susp    |
|           24 |     3351 | 2024-08-03 | Take Flyte       | W   | 0.395      | -            | -                | -                | -         |     0.52 | JBa, MarKE, phzy, Sonic, susp        |
|           23 |     3458 | 2024-07-31 | timbermen        | W   | 0.376      | -            | -                | -                | -         |     1.12 | JBa, phzy, Sonic, stanislaw, susp    |
|           22 |     3465 | 2024-07-31 | timbermen        | W   | 0.376      | -            | -                | -                | -         |     1.13 | JBa, phzy, Sonic, stanislaw, susp    |
|           21 |     3798 | 2024-07-21 | NRG              | W   | 0.310      | -            | -                | -                | -         |     1.10 | JBa, phzy, Sonic, stanislaw, susp    |
|           20 |     3799 | 2024-07-21 | timbermen        | W   | 0.309      | -            | -                | -                | -         |     0.98 | JBa, phzy, Sonic, stanislaw, susp    |
|           19 |     3824 | 2024-07-20 | Party Astronauts | W   | 0.303      | -            | -                | -                | -         |     0.72 | JBa, phzy, Sonic, stanislaw, susp    |
|           18 |     3898 | 2024-07-18 | Take Flyte       | W   | 0.290      | -            | -                | -                | -         |     0.41 | JBa, phzy, Sonic, stanislaw, susp    |
|           17 |     3903 | 2024-07-18 | Take Flyte       | W   | 0.289      | -            | -                | -                | -         |     0.41 | JBa, phzy, Sonic, stanislaw, susp    |
|           16 |     3969 | 2024-07-17 | Limitless        | W   | 0.283      | -            | -                | -                | -         |     0.47 | JBa, phzy, Sonic, stanislaw, susp    |
|           15 |     3972 | 2024-07-17 | Limitless        | W   | 0.282      | -            | -                | -                | -         |     0.47 | JBa, phzy, Sonic, stanislaw, susp    |
|           14 |     4027 | 2024-07-16 | LAG              | W   | 0.276      | -            | -                | -                | -         |     0.39 | JBa, phzy, Sonic, stanislaw, susp    |
|           13 |     4033 | 2024-07-16 | LAG              | L   | 0.276      | -            | -                | -                | -         |    -8.32 | JBa, phzy, Sonic, stanislaw, susp    |
|           12 |     4317 | 2024-06-16 | Nouns            | L   | 0.075      | -            | -                | -                | -         |    -1.99 | JBa, motm, SLIGHT, Sonic, stanislaw  |
|           11 |     4341 | 2024-06-15 | Mythic           | W   | 0.069      | -            | -                | -                | -         |     0.06 | JBa, motm, SLIGHT, Sonic, stanislaw  |
|           10 |     4415 | 2024-06-13 | Final Form       | W   | 0.057      | -            | -                | -                | -         |     0.02 | Grizz, JBa, SLIGHT, Sonic, stanislaw |
|            9 |     4526 | 2024-06-09 | M80              | L   | 0.030      | -            | -                | -                | -         |    -0.42 | Grizz, JBa, SLIGHT, Sonic, stanislaw |
|            8 |     4585 | 2024-06-08 | Nouns            | W   | 0.024      | -            | -                | -                | -         |     0.12 | Grizz, JBa, SLIGHT, Sonic, stanislaw |
|            7 |     4595 | 2024-06-08 | Party Astronauts | L   | 0.022      | -            | -                | -                | -         |    -0.65 | Grizz, JBa, SLIGHT, Sonic, stanislaw |
|            6 |     4644 | 2024-06-07 | LAG              | W   | 0.016      | -            | -                | -                | -         |     0.01 | Grizz, JBa, SLIGHT, Sonic, stanislaw |
|            5 |     4700 | 2024-06-06 | M80              | L   | 0.010      | -            | -                | -                | -         |    -0.14 | Grizz, JBa, SLIGHT, Sonic, stanislaw |
|            4 |     4713 | 2024-06-06 | NRG              | L   | 0.008      | -            | -                | -                | -         |    -0.24 | Grizz, JBa, SLIGHT, Sonic, stanislaw |
|            3 |     4720 | 2024-06-06 | M80              | L   | 0.008      | -            | -                | -                | -         |    -0.11 | Grizz, JBa, SLIGHT, Sonic, stanislaw |
|            2 |     4736 | 2024-06-06 | NRG              | W   | 0.007      | -            | -                | -                | -         |     0.02 | Grizz, JBa, SLIGHT, Sonic, stanislaw |
|            1 |     4771 | 2024-06-05 | Party Astronauts | W   | 0.003      | -            | -                | -                | -         |     0.01 | Grizz, JBa, SLIGHT, Sonic, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,977.52)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.916 | $4,250.00      | $3,892.68       |
| 2024-10-06 |      0.822 | $10,000.00     | $8,222.60       |
| 2024-09-22 |      0.728 | $7,000.00      | $5,095.39       |
| 2024-08-18 |      0.497 | $10,000.00     | $4,967.38       |
| 2024-07-21 |      0.310 | $4,000.00      | $1,239.53       |
| 2024-06-16 |      0.076 | $1,500.00      | $114.58         |
| 2024-06-09 |      0.030 | $15,000.00     | $445.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
