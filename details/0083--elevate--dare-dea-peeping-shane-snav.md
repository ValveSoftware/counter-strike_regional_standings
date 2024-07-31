### Roster Details<br />
Team Name: Elevate<br />
Roster: dare, dea, Peeping, shane, snav<br />
Global Rank: [83](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [22]( ../standings_americas.md)<br />
<br />
Final Rank Value:  930.0<br />
<br />
Final Rank Value (930.0) = Starting Rank Value (1011.2) + Head To Head Adjustments (-81.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.326[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.326[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1011.2
- 400 + ( ( 0.296 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1011.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |      230 | 2024-07-24 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -12.51 | dare, dea, Peeping, shane, snav     |
|           67 |      234 | 2024-07-24 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -13.63 | dare, dea, Peeping, shane, snav     |
|           66 |      325 | 2024-07-21 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -13.63 | dare, Fr3nk1e, Peeping, shane, snav |
|           65 |      353 | 2024-07-20 | Perseverance     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.46 | dare, Fr3nk1e, Peeping, shane, snav |
|           64 |      423 | 2024-07-18 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -21.30 | dare, Fr3nk1e, Peeping, shane, snav |
|           63 |      425 | 2024-07-18 | BOSS             | W   | 1.000      | 0.477        | 0.014 (0.007)    | 0.334 (0.159)    | 0 (0.000) |     9.77 | dare, Fr3nk1e, Peeping, shane, snav |
|           62 |      487 | 2024-07-17 | Perseverance     | W   | 1.000      | 0.477        | -                | 0.248 (0.118)    | 0 (0.000) |     5.45 | dare, Fr3nk1e, Peeping, shane, snav |
|           61 |      491 | 2024-07-17 | Perseverance     | W   | 1.000      | 0.477        | -                | 0.248 (0.118)    | 0 (0.000) |     5.73 | dare, Fr3nk1e, Peeping, shane, snav |
|           60 |      549 | 2024-07-16 | Mythic           | W   | 1.000      | 0.477        | -                | 0.266 (0.127)    | 0 (0.000) |     8.24 | dare, Fr3nk1e, Peeping, shane, snav |
|           59 |      556 | 2024-07-16 | Mythic           | W   | 1.000      | 0.477        | -                | 0.266 (0.127)    | 0 (0.000) |     8.83 | dare, Fr3nk1e, Peeping, shane, snav |
|           58 |      602 | 2024-07-15 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -19.91 | dare, dea, Peeping, shane, snav     |
|           57 |      607 | 2024-07-15 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -21.56 | dare, dea, Peeping, shane, snav     |
|           56 |      817 | 2024-06-23 | Locke's Kittens  | W   | 0.949      | -            | -                | -                | 1 (0.949) |     7.06 | dare, dea, Peeping, shane, snav     |
|           55 |      819 | 2024-06-23 | WICKED           | W   | 0.947      | -            | -                | -                | 1 (0.947) |     3.08 | dare, dea, Peeping, shane, snav     |
|           54 |      825 | 2024-06-22 | LOCK IN          | W   | 0.941      | -            | -                | -                | 1 (0.941) |     1.11 | dare, dea, Peeping, shane, snav     |
|           53 |      840 | 2024-06-16 | Legacy           | L   | 0.901      | -            | -                | -                | -         |   -11.85 | dare, dea, Peeping, shane, snav     |
|           52 |      863 | 2024-06-15 | BOSS             | W   | 0.895      | 0.371        | 0.014 (0.005)    | 0.334 (0.111)    | 0 (0.000) |     6.76 | dare, dea, Peeping, shane, snav     |
|           51 |      898 | 2024-06-14 | FLUFFY AIMERS    | W   | 0.889      | -            | -                | -                | -         |     4.73 | dare, dea, Peeping, shane, snav     |
|           50 |     1176 | 2024-06-07 | Nouns            | L   | 0.841      | -            | -                | -                | -         |   -13.49 | dare, dea, Peeping, shane, snav     |
|           49 |     1181 | 2024-06-07 | Nouns            | W   | 0.840      | 0.143        | 0.058 (0.007)    | -                | -         |    13.13 | dare, dea, Peeping, shane, snav     |
|           48 |     1185 | 2024-06-07 | Legacy           | L   | 0.840      | -            | -                | -                | -         |   -11.84 | dare, dea, Peeping, shane, snav     |
|           47 |     1225 | 2024-06-06 | Nouns            | L   | 0.835      | -            | -                | -                | -         |   -13.36 | dare, dea, Peeping, shane, snav     |
|           46 |     1237 | 2024-06-06 | FlyQuest RED     | W   | 0.834      | 0.384        | 0.018 (0.006)    | -                | -         |     5.45 | dare, dea, Peeping, shane, snav     |
|           45 |     1294 | 2024-06-05 | Mythic           | W   | 0.828      | -            | -                | -                | -         |     7.31 | dare, dea, Peeping, shane, snav     |
|           44 |     1346 | 2024-06-04 | Party Astronauts | L   | 0.822      | -            | -                | -                | -         |   -14.32 | dare, dea, Peeping, shane, snav     |
|           43 |     1657 | 2024-05-22 | NRG              | W   | 0.735      | 0.477        | 0.020 (0.007)    | 0.519 (0.182)    | -         |     9.08 | dare, dea, Peeping, shane, snav     |
|           42 |     1662 | 2024-05-22 | NRG              | W   | 0.735      | 0.477        | 0.020 (0.007)    | 0.519 (0.182)    | -         |     9.67 | dare, dea, Peeping, shane, snav     |
|           41 |     1705 | 2024-05-21 | Take Flyte       | W   | 0.728      | -            | -                | -                | -         |     3.38 | dare, dea, Peeping, shane, snav     |
|           40 |     1709 | 2024-05-21 | Take Flyte       | W   | 0.728      | -            | -                | -                | -         |     3.49 | dare, dea, Peeping, shane, snav     |
|           39 |     1744 | 2024-05-20 | Mythic           | L   | 0.721      | -            | -                | -                | -         |   -16.99 | dare, dea, Peeping, shane, snav     |
|           38 |     1837 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.702      | -            | -                | -                | -         |     3.87 | dare, dea, Peeping, shane, snav     |
|           37 |     1838 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.701      | -            | -                | -                | -         |     4.01 | dare, dea, Peeping, shane, snav     |
|           36 |     1908 | 2024-05-15 | Limitless        | W   | 0.688      | -            | -                | -                | -         |     2.67 | dare, dea, Peeping, shane, snav     |
|           35 |     1915 | 2024-05-15 | Limitless        | W   | 0.688      | -            | -                | -                | -         |     2.74 | dare, dea, Peeping, shane, snav     |
|           34 |     1961 | 2024-05-14 | M80              | L   | 0.682      | -            | -                | -                | -         |    -3.61 | dare, dea, Peeping, shane, snav     |
|           33 |     1967 | 2024-05-14 | M80              | L   | 0.681      | -            | -                | -                | -         |    -3.74 | dare, dea, Peeping, shane, snav     |
|           32 |     1978 | 2024-05-14 | Perseverance     | W   | 0.681      | -            | -                | -                | -         |     4.46 | dare, dea, Peeping, shane, snav     |
|           31 |     1982 | 2024-05-14 | Perseverance     | W   | 0.681      | -            | -                | -                | -         |     4.64 | dare, dea, Peeping, shane, snav     |
|           30 |     2036 | 2024-05-12 | NRG              | L   | 0.667      | -            | -                | -                | -         |   -13.45 | dare, dea, intra, Peeping, snav     |
|           29 |     2056 | 2024-05-11 | Nouns            | W   | 0.661      | 0.270        | 0.058 (0.010)    | -                | -         |     9.32 | dare, dea, intra, Peeping, snav     |
|           28 |     2057 | 2024-05-11 | Wildcard         | W   | 0.661      | 0.270        | 0.055 (0.010)    | -                | -         |     8.42 | dare, dea, intra, Peeping, snav     |
|           27 |     2060 | 2024-05-11 | Nouns            | L   | 0.661      | -            | -                | -                | -         |   -11.06 | dare, dea, intra, Peeping, snav     |
|           26 |     2127 | 2024-05-08 | MIGHT            | W   | 0.642      | -            | -                | -                | -         |     1.51 | dare, dea, Peeping, shane, snav     |
|           25 |     2129 | 2024-05-08 | MIGHT            | W   | 0.641      | -            | -                | -                | -         |     1.54 | dare, dea, Peeping, shane, snav     |
|           24 |     2151 | 2024-05-07 | Party Astronauts | W   | 0.635      | 0.477        | 0.042 (0.013)    | 0.532 (0.161)    | -         |     9.31 | dare, dea, Peeping, shane, snav     |
|           23 |     2152 | 2024-05-07 | Party Astronauts | L   | 0.635      | -            | -                | -                | -         |   -10.94 | dare, dea, Peeping, shane, snav     |
|           22 |     2448 | 2024-04-23 | Wildcard         | L   | 0.542      | -            | -                | -                | -         |   -10.53 | dare, dea, Peeping, shane, snav     |
|           21 |     2450 | 2024-04-23 | Wildcard         | W   | 0.541      | 0.477        | 0.055 (0.014)    | 0.501 (0.129)    | -         |     6.62 | dare, dea, Peeping, shane, snav     |
|           20 |     2585 | 2024-04-18 | Legacy           | L   | 0.509      | -            | -                | -                | -         |    -7.49 | dare, dea, Peeping, shane, snav     |
|           19 |     2593 | 2024-04-18 | M80              | L   | 0.507      | -            | -                | -                | -         |    -3.37 | dare, dea, Peeping, shane, snav     |
|           18 |     2637 | 2024-04-17 | Nouns            | W   | 0.502      | -            | -                | -                | -         |     6.89 | dare, dea, Peeping, shane, snav     |
|           17 |     2642 | 2024-04-17 | Wildcard         | W   | 0.501      | -            | -                | -                | -         |     6.31 | dare, dea, Peeping, shane, snav     |
|           16 |     2791 | 2024-04-10 | Nouns            | L   | 0.455      | -            | -                | -                | -         |    -8.31 | dare, dea, Peeping, shane, snav     |
|           15 |     2797 | 2024-04-10 | Nouns            | L   | 0.455      | -            | -                | -                | -         |    -8.63 | dare, dea, Peeping, shane, snav     |
|           14 |     3025 | 2024-04-03 | LAG              | W   | 0.408      | -            | -                | -                | -         |     4.16 | dare, dea, Peeping, shane, snav     |
|           13 |     3028 | 2024-04-03 | LAG              | L   | 0.408      | -            | -                | -                | -         |    -8.89 | dare, dea, Peeping, shane, snav     |
|           12 |     3200 | 2024-03-26 | BOSS             | W   | 0.355      | -            | -                | -                | -         |     2.82 | dare, dea, Peeping, shane, snav     |
|           11 |     3207 | 2024-03-26 | BOSS             | W   | 0.355      | -            | -                | -                | -         |     2.89 | dare, dea, Peeping, shane, snav     |
|           10 |     3374 | 2024-03-15 | Carpe Diem       | W   | 0.282      | -            | -                | -                | -         |     1.29 | dare, dea, Peeping, shane, snav     |
|            9 |     3376 | 2024-03-15 | Carpe Diem       | W   | 0.282      | -            | -                | -                | -         |     1.31 | dare, dea, Peeping, shane, snav     |
|            8 |     3474 | 2024-03-12 | Party Astronauts | L   | 0.261      | -            | -                | -                | -         |    -4.89 | dare, dea, Peeping, shane, snav     |
|            7 |     3574 | 2024-03-08 | Spirit           | L   | 0.232      | -            | -                | -                | -         |    -0.04 | dare, MRC9, Peeping, shane, snav    |
|            6 |     3725 | 2024-03-02 | ODDIK            | L   | 0.194      | -            | -                | -                | -         |    -3.10 | dare, nbgee12, Peeping, shane, snav |
|            5 |     3755 | 2024-03-01 | Complexity       | L   | 0.186      | -            | -                | -                | -         |    -0.16 | dare, nbgee12, Peeping, shane, snav |
|            4 |     4143 | 2024-02-13 | Mythic           | L   | 0.075      | -            | -                | -                | -         |    -1.83 | dare, dea, Peeping, shane, snav     |
|            3 |     4145 | 2024-02-13 | Mythic           | W   | 0.075      | -            | -                | -                | -         |     0.54 | dare, dea, Peeping, shane, snav     |
|            2 |     4251 | 2024-02-04 | Wildcard         | W   | 0.015      | -            | -                | -                | -         |     0.17 | dare, dea, Peeping, shane, snav     |
|            1 |     4278 | 2024-02-03 | NRG              | W   | 0.008      | -            | -                | -                | -         |     0.07 | dare, dea, Peeping, shane, snav     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,067.21)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-23 |      0.949 | $3,000.00      | $2,846.57       |
| 2024-06-16 |      0.902 | $1,500.00      | $1,352.54       |
| 2024-06-09 |      0.855 | $4,250.00      | $3,633.75       |
| 2024-03-10 |      0.247 | $5,000.00      | $1,234.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
