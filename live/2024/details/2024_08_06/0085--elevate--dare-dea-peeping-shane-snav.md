### Roster Details<br />
Team Name: Elevate<br />
Roster: dare, dea, Peeping, shane, snav<br />
Global Rank: [85](../../standings_global_2024_08_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_06.md)<br />
Regional Rank: [21]( ../../standings_americas_2024_08_06.md)<br />
<br />
Final Rank Value:  935.0<br />
<br />
Final Rank Value (935.0) = Starting Rank Value (1015.6) + Head To Head Adjustments (-80.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.314[<sup>2</sup>](#table1)

The average of these factors is 0.299<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1015.6
- 400 + ( ( 0.299 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1015.6


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
|           71 |       45 | 2024-08-04 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -12.02 | dare, dea, Peeping, shane, snav     |
|           70 |       47 | 2024-08-04 | Nouns            | W   | 1.000      | 0.303        | 0.057 (0.017)    | 0.566 (0.171)    | 0 (0.000) |    19.45 | dare, dea, Peeping, shane, snav     |
|           69 |       77 | 2024-08-03 | Party Astronauts | W   | 1.000      | 0.303        | 0.041 (0.012)    | 0.510 (0.154)    | 0 (0.000) |    18.81 | dare, intra, Peeping, shane, snav   |
|           68 |      192 | 2024-07-31 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -10.12 | dare, dea, Peeping, shane, snav     |
|           67 |      199 | 2024-07-31 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -10.95 | dare, dea, Peeping, shane, snav     |
|           66 |      438 | 2024-07-24 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -12.66 | dare, dea, Peeping, shane, snav     |
|           65 |      442 | 2024-07-24 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -13.80 | dare, dea, Peeping, shane, snav     |
|           64 |      533 | 2024-07-21 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -13.74 | dare, Fr3nk1e, Peeping, shane, snav |
|           63 |      561 | 2024-07-20 | Phoenix          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.44 | dare, Fr3nk1e, Peeping, shane, snav |
|           62 |      631 | 2024-07-18 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -21.36 | dare, Fr3nk1e, Peeping, shane, snav |
|           61 |      633 | 2024-07-18 | BOSS             | W   | 1.000      | 0.477        | 0.014 (0.007)    | 0.318 (0.152)    | 0 (0.000) |     9.71 | dare, Fr3nk1e, Peeping, shane, snav |
|           60 |      695 | 2024-07-17 | Phoenix          | W   | 1.000      | 0.477        | -                | 0.270 (0.129)    | 0 (0.000) |     5.42 | dare, Fr3nk1e, Peeping, shane, snav |
|           59 |      699 | 2024-07-17 | Phoenix          | W   | 1.000      | 0.477        | -                | 0.270 (0.129)    | 0 (0.000) |     5.71 | dare, Fr3nk1e, Peeping, shane, snav |
|           58 |      757 | 2024-07-16 | Mythic           | W   | 1.000      | 0.477        | -                | 0.285 (0.136)    | 0 (0.000) |     8.11 | dare, Fr3nk1e, Peeping, shane, snav |
|           57 |      764 | 2024-07-16 | Mythic           | W   | 1.000      | 0.477        | -                | 0.285 (0.136)    | -         |     8.69 | dare, Fr3nk1e, Peeping, shane, snav |
|           56 |      810 | 2024-07-15 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -20.14 | dare, dea, Peeping, shane, snav     |
|           55 |      815 | 2024-07-15 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -21.79 | dare, dea, Peeping, shane, snav     |
|           54 |     1025 | 2024-06-23 | Locke's Kittens  | W   | 0.910      | -            | -                | -                | 1 (0.910) |     6.56 | dare, dea, Peeping, shane, snav     |
|           53 |     1027 | 2024-06-23 | WICKED           | W   | 0.908      | -            | -                | -                | 1 (0.908) |     2.89 | dare, dea, Peeping, shane, snav     |
|           52 |     1033 | 2024-06-22 | LOCK IN          | W   | 0.902      | -            | -                | -                | 1 (0.902) |     1.06 | dare, dea, Peeping, shane, snav     |
|           51 |     1048 | 2024-06-16 | Legacy           | L   | 0.862      | -            | -                | -                | -         |   -11.49 | dare, dea, Peeping, shane, snav     |
|           50 |     1071 | 2024-06-15 | BOSS             | W   | 0.856      | -            | -                | -                | -         |     6.39 | dare, dea, Peeping, shane, snav     |
|           49 |     1106 | 2024-06-14 | FLUFFY AIMERS    | W   | 0.850      | -            | -                | -                | -         |     4.67 | dare, dea, Peeping, shane, snav     |
|           48 |     1384 | 2024-06-07 | Nouns            | L   | 0.801      | -            | -                | -                | -         |   -13.14 | dare, dea, Peeping, shane, snav     |
|           47 |     1389 | 2024-06-07 | Nouns            | W   | 0.801      | 0.143        | 0.057 (0.007)    | -                | -         |    12.25 | dare, dea, Peeping, shane, snav     |
|           46 |     1393 | 2024-06-07 | Legacy           | L   | 0.801      | -            | -                | -                | -         |   -11.41 | dare, dea, Peeping, shane, snav     |
|           45 |     1433 | 2024-06-06 | Nouns            | L   | 0.796      | -            | -                | -                | -         |   -13.05 | dare, dea, Peeping, shane, snav     |
|           44 |     1445 | 2024-06-06 | FlyQuest RED     | W   | 0.795      | -            | -                | -                | -         |     4.95 | dare, dea, Peeping, shane, snav     |
|           43 |     1502 | 2024-06-05 | Mythic           | W   | 0.789      | -            | -                | -                | -         |     6.78 | dare, dea, Peeping, shane, snav     |
|           42 |     1554 | 2024-06-04 | Party Astronauts | L   | 0.783      | -            | -                | -                | -         |   -13.90 | dare, dea, Peeping, shane, snav     |
|           41 |     1865 | 2024-05-22 | NRG              | W   | 0.696      | 0.477        | 0.032 (0.011)    | 0.524 (0.174)    | -         |     8.70 | dare, dea, Peeping, shane, snav     |
|           40 |     1870 | 2024-05-22 | NRG              | W   | 0.696      | 0.477        | 0.032 (0.011)    | 0.524 (0.174)    | -         |     9.23 | dare, dea, Peeping, shane, snav     |
|           39 |     1913 | 2024-05-21 | Take Flyte       | W   | 0.689      | -            | -                | -                | -         |     3.15 | dare, dea, Peeping, shane, snav     |
|           38 |     1917 | 2024-05-21 | Take Flyte       | W   | 0.689      | -            | -                | -                | -         |     3.24 | dare, dea, Peeping, shane, snav     |
|           37 |     1952 | 2024-05-20 | Mythic           | L   | 0.682      | -            | -                | -                | -         |   -16.22 | dare, dea, Peeping, shane, snav     |
|           36 |     2045 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.662      | -            | -                | -                | -         |     3.79 | dare, dea, Peeping, shane, snav     |
|           35 |     2046 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.662      | -            | -                | -                | -         |     3.93 | dare, dea, Peeping, shane, snav     |
|           34 |     2116 | 2024-05-15 | Limitless        | W   | 0.649      | -            | -                | -                | -         |     2.46 | dare, dea, Peeping, shane, snav     |
|           33 |     2123 | 2024-05-15 | Limitless        | W   | 0.649      | -            | -                | -                | -         |     2.52 | dare, dea, Peeping, shane, snav     |
|           32 |     2169 | 2024-05-14 | M80              | L   | 0.643      | -            | -                | -                | -         |    -3.71 | dare, dea, Peeping, shane, snav     |
|           31 |     2175 | 2024-05-14 | M80              | L   | 0.642      | -            | -                | -                | -         |    -3.84 | dare, dea, Peeping, shane, snav     |
|           30 |     2186 | 2024-05-14 | Phoenix          | W   | 0.642      | -            | -                | -                | -         |     4.09 | dare, dea, Peeping, shane, snav     |
|           29 |     2190 | 2024-05-14 | Phoenix          | W   | 0.641      | -            | -                | -                | -         |     4.25 | dare, dea, Peeping, shane, snav     |
|           28 |     2244 | 2024-05-12 | NRG              | L   | 0.628      | -            | -                | -                | -         |   -12.48 | dare, dea, intra, Peeping, snav     |
|           27 |     2264 | 2024-05-11 | Nouns            | W   | 0.622      | 0.270        | 0.057 (0.010)    | -                | -         |     8.50 | dare, dea, intra, Peeping, snav     |
|           26 |     2265 | 2024-05-11 | Wildcard         | W   | 0.622      | 0.270        | 0.055 (0.009)    | -                | -         |     7.91 | dare, dea, intra, Peeping, snav     |
|           25 |     2268 | 2024-05-11 | Nouns            | L   | 0.621      | -            | -                | -                | -         |   -10.75 | dare, dea, intra, Peeping, snav     |
|           24 |     2335 | 2024-05-08 | MIGHT            | W   | 0.602      | -            | -                | -                | -         |     1.35 | dare, dea, Peeping, shane, snav     |
|           23 |     2337 | 2024-05-08 | MIGHT            | W   | 0.602      | -            | -                | -                | -         |     1.37 | dare, dea, Peeping, shane, snav     |
|           22 |     2359 | 2024-05-07 | Party Astronauts | W   | 0.596      | 0.477        | 0.041 (0.012)    | 0.510 (0.145)    | -         |     8.46 | dare, dea, Peeping, shane, snav     |
|           21 |     2360 | 2024-05-07 | Party Astronauts | L   | 0.596      | -            | -                | -                | -         |   -10.56 | dare, dea, Peeping, shane, snav     |
|           20 |     2656 | 2024-04-23 | Wildcard         | L   | 0.503      | -            | -                | -                | -         |    -9.78 | dare, dea, Peeping, shane, snav     |
|           19 |     2658 | 2024-04-23 | Wildcard         | W   | 0.502      | 0.477        | 0.055 (0.013)    | -                | -         |     6.14 | dare, dea, Peeping, shane, snav     |
|           18 |     2793 | 2024-04-18 | Legacy           | L   | 0.470      | -            | -                | -                | -         |    -7.03 | dare, dea, Peeping, shane, snav     |
|           17 |     2801 | 2024-04-18 | M80              | L   | 0.468      | -            | -                | -                | -         |    -3.41 | dare, dea, Peeping, shane, snav     |
|           16 |     2845 | 2024-04-17 | Nouns            | W   | 0.462      | -            | -                | -                | -         |     6.10 | dare, dea, Peeping, shane, snav     |
|           15 |     2850 | 2024-04-17 | Wildcard         | W   | 0.461      | -            | -                | -                | -         |     5.79 | dare, dea, Peeping, shane, snav     |
|           14 |     2999 | 2024-04-10 | Nouns            | L   | 0.416      | -            | -                | -                | -         |    -7.82 | dare, dea, Peeping, shane, snav     |
|           13 |     3005 | 2024-04-10 | Nouns            | L   | 0.415      | -            | -                | -                | -         |    -8.10 | dare, dea, Peeping, shane, snav     |
|           12 |     3233 | 2024-04-03 | LAG              | W   | 0.369      | -            | -                | -                | -         |     3.54 | dare, dea, Peeping, shane, snav     |
|           11 |     3236 | 2024-04-03 | LAG              | L   | 0.369      | -            | -                | -                | -         |    -8.25 | dare, dea, Peeping, shane, snav     |
|           10 |     3408 | 2024-03-26 | BOSS             | W   | 0.316      | -            | -                | -                | -         |     2.42 | dare, dea, Peeping, shane, snav     |
|            9 |     3415 | 2024-03-26 | BOSS             | W   | 0.316      | -            | -                | -                | -         |     2.47 | dare, dea, Peeping, shane, snav     |
|            8 |     3582 | 2024-03-15 | Carpe Diem       | W   | 0.243      | -            | -                | -                | -         |     1.06 | dare, dea, Peeping, shane, snav     |
|            7 |     3584 | 2024-03-15 | Carpe Diem       | W   | 0.243      | -            | -                | -                | -         |     1.07 | dare, dea, Peeping, shane, snav     |
|            6 |     3682 | 2024-03-12 | Party Astronauts | L   | 0.222      | -            | -                | -                | -         |    -4.27 | dare, dea, Peeping, shane, snav     |
|            5 |     3782 | 2024-03-08 | Spirit           | L   | 0.193      | -            | -                | -                | -         |    -0.04 | dare, MRC9, Peeping, shane, snav    |
|            4 |     3933 | 2024-03-02 | ODDIK            | L   | 0.155      | -            | -                | -                | -         |    -2.51 | dare, nbgee12, Peeping, shane, snav |
|            3 |     3963 | 2024-03-01 | Complexity       | L   | 0.147      | -            | -                | -                | -         |    -0.13 | dare, nbgee12, Peeping, shane, snav |
|            2 |     4351 | 2024-02-13 | Mythic           | L   | 0.036      | -            | -                | -                | -         |    -0.89 | dare, dea, Peeping, shane, snav     |
|            1 |     4353 | 2024-02-13 | Mythic           | W   | 0.036      | -            | -                | -                | -         |     0.25 | dare, dea, Peeping, shane, snav     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,528.70)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-23 |      0.910 | $3,000.00      | $2,729.07       |
| 2024-06-16 |      0.863 | $1,500.00      | $1,293.80       |
| 2024-06-09 |      0.816 | $4,250.00      | $3,467.30       |
| 2024-03-10 |      0.208 | $5,000.00      | $1,038.52       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
