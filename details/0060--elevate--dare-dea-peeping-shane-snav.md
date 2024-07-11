### Roster Details<br />
Team Name: Elevate<br />
Roster: dare, dea, Peeping, shane, snav<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [60](../standings_global.md)<br />
Regional Rank: [14]( ../standings_americas.md)<br />
Final Rank Value:  1042.6<br />
<br />
Final Rank Value (1042.6) = Starting Rank Value (1071.0) + Head To Head Adjustments (-28.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.156[<sup>2</sup>](#table1)
- LAN Wins: 0.347[<sup>2</sup>](#table1)

The average of these factors is 0.318<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1071.0
- 400 + ( ( 0.318 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1071.0


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
|           67 |      123 | 2024-06-23 | Locke's Kittens  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     6.56 | dare, dea, Peeping, shane, snav     |
|           66 |      125 | 2024-06-23 | WICKED           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.63 | dare, dea, Peeping, shane, snav     |
|           65 |      131 | 2024-06-22 | LOCK IN          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.88 | dare, dea, Peeping, shane, snav     |
|           64 |      146 | 2024-06-16 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -12.25 | dare, dea, Peeping, shane, snav     |
|           63 |      169 | 2024-06-15 | BOSS             | W   | 1.000      | 0.371        | 0.021 (0.008)    | 0.349 (0.129)    | 0 (0.000) |     6.87 | dare, dea, Peeping, shane, snav     |
|           62 |      204 | 2024-06-14 | FLUFFY AIMERS    | W   | 1.000      | 0.371        | -                | 0.297 (0.110)    | 0 (0.000) |     5.50 | dare, dea, Peeping, shane, snav     |
|           61 |      482 | 2024-06-07 | Nouns            | L   | 0.975      | -            | -                | -                | -         |   -14.94 | dare, dea, Peeping, shane, snav     |
|           60 |      487 | 2024-06-07 | Nouns            | W   | 0.974      | 0.143        | 0.086 (0.012)    | -                | 0 (0.000) |    15.82 | dare, dea, Peeping, shane, snav     |
|           59 |      491 | 2024-06-07 | Legacy           | L   | 0.974      | -            | -                | -                | -         |   -12.62 | dare, dea, Peeping, shane, snav     |
|           58 |      531 | 2024-06-06 | Nouns            | L   | 0.969      | -            | -                | -                | -         |   -14.61 | dare, dea, Peeping, shane, snav     |
|           57 |      543 | 2024-06-06 | FlyQuest RED     | W   | 0.968      | 0.384        | 0.028 (0.010)    | -                | 0 (0.000) |     6.07 | dare, dea, Peeping, shane, snav     |
|           56 |      600 | 2024-06-05 | Mythic           | W   | 0.963      | 0.477        | -                | 0.359 (0.165)    | 0 (0.000) |     9.01 | dare, dea, Peeping, shane, snav     |
|           55 |      652 | 2024-06-04 | Party Astronauts | L   | 0.956      | -            | -                | -                | -         |   -16.39 | dare, dea, Peeping, shane, snav     |
|           54 |      963 | 2024-05-22 | NRG              | W   | 0.869      | 0.477        | 0.026 (0.011)    | 0.478 (0.198)    | 0 (0.000) |    10.80 | dare, dea, Peeping, shane, snav     |
|           53 |      968 | 2024-05-22 | NRG              | W   | 0.869      | 0.477        | 0.026 (0.011)    | 0.478 (0.198)    | 0 (0.000) |    11.63 | dare, dea, Peeping, shane, snav     |
|           52 |     1011 | 2024-05-21 | One More         | W   | 0.862      | -            | -                | -                | -         |     3.43 | dare, dea, Peeping, shane, snav     |
|           51 |     1015 | 2024-05-21 | One More         | W   | 0.862      | -            | -                | -                | -         |     3.54 | dare, dea, Peeping, shane, snav     |
|           50 |     1050 | 2024-05-20 | Mythic           | L   | 0.855      | -            | -                | -                | -         |   -19.62 | dare, dea, Peeping, shane, snav     |
|           49 |     1143 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.836      | 0.477        | -                | 0.297 (0.118)    | -         |     5.02 | dare, dea, Peeping, shane, snav     |
|           48 |     1144 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.835      | 0.477        | -                | 0.297 (0.118)    | -         |     5.26 | dare, dea, Peeping, shane, snav     |
|           47 |     1214 | 2024-05-15 | Limitless        | W   | 0.822      | -            | -                | -                | -         |     2.86 | dare, dea, Peeping, shane, snav     |
|           46 |     1221 | 2024-05-15 | Limitless        | W   | 0.822      | -            | -                | -                | -         |     2.95 | dare, dea, Peeping, shane, snav     |
|           45 |     1267 | 2024-05-14 | M80              | L   | 0.816      | -            | -                | -                | -         |    -5.63 | dare, dea, Peeping, shane, snav     |
|           44 |     1273 | 2024-05-14 | M80              | L   | 0.816      | -            | -                | -                | -         |    -5.92 | dare, dea, Peeping, shane, snav     |
|           43 |     1284 | 2024-05-14 | Take Flyte       | W   | 0.815      | -            | -                | -                | -         |     5.19 | dare, dea, Peeping, shane, snav     |
|           42 |     1288 | 2024-05-14 | Take Flyte       | W   | 0.815      | -            | -                | -                | -         |     5.44 | dare, dea, Peeping, shane, snav     |
|           41 |     1342 | 2024-05-12 | NRG              | L   | 0.801      | -            | -                | -                | -         |   -16.02 | dare, dea, intra, Peeping, snav     |
|           40 |     1362 | 2024-05-11 | Nouns            | W   | 0.795      | 0.270        | 0.086 (0.018)    | -                | -         |    11.74 | dare, dea, intra, Peeping, snav     |
|           39 |     1363 | 2024-05-11 | Wildcard         | W   | 0.795      | 0.270        | 0.073 (0.016)    | 0.569 (0.122)    | -         |    10.18 | dare, dea, intra, Peeping, snav     |
|           38 |     1366 | 2024-05-11 | Nouns            | L   | 0.795      | -            | -                | -                | -         |   -12.50 | dare, dea, intra, Peeping, snav     |
|           37 |     1433 | 2024-05-08 | MIGHT            | W   | 0.776      | -            | -                | -                | -         |     1.64 | dare, dea, Peeping, shane, snav     |
|           36 |     1435 | 2024-05-08 | MIGHT            | W   | 0.775      | -            | -                | -                | -         |     1.67 | dare, dea, Peeping, shane, snav     |
|           35 |     1457 | 2024-05-07 | Party Astronauts | W   | 0.769      | 0.477        | 0.062 (0.023)    | 0.589 (0.216)    | -         |    11.47 | dare, dea, Peeping, shane, snav     |
|           34 |     1458 | 2024-05-07 | Party Astronauts | L   | 0.769      | -            | -                | -                | -         |   -13.00 | dare, dea, Peeping, shane, snav     |
|           33 |     1754 | 2024-04-23 | Wildcard         | L   | 0.676      | -            | -                | -                | -         |   -13.05 | dare, dea, Peeping, shane, snav     |
|           32 |     1756 | 2024-04-23 | Wildcard         | W   | 0.676      | 0.477        | 0.073 (0.023)    | 0.569 (0.183)    | -         |     8.30 | dare, dea, Peeping, shane, snav     |
|           31 |     1891 | 2024-04-18 | Legacy           | L   | 0.643      | -            | -                | -                | -         |    -8.48 | dare, dea, Peeping, shane, snav     |
|           30 |     1899 | 2024-04-18 | M80              | L   | 0.641      | -            | -                | -                | -         |    -6.21 | dare, dea, Peeping, shane, snav     |
|           29 |     1943 | 2024-04-17 | Nouns            | W   | 0.636      | 0.143        | 0.086 (0.008)    | -                | -         |     9.34 | dare, dea, Peeping, shane, snav     |
|           28 |     1948 | 2024-04-17 | Wildcard         | W   | 0.635      | -            | -                | -                | -         |     8.10 | dare, dea, Peeping, shane, snav     |
|           27 |     2097 | 2024-04-10 | Nouns            | L   | 0.589      | -            | -                | -                | -         |   -10.13 | dare, dea, Peeping, shane, snav     |
|           26 |     2103 | 2024-04-10 | Nouns            | L   | 0.589      | -            | -                | -                | -         |   -10.67 | dare, dea, Peeping, shane, snav     |
|           25 |     2331 | 2024-04-03 | LAG              | W   | 0.542      | -            | -                | -                | -         |     5.13 | dare, dea, Peeping, shane, snav     |
|           24 |     2334 | 2024-04-03 | LAG              | L   | 0.542      | -            | -                | -                | -         |   -12.25 | dare, dea, Peeping, shane, snav     |
|           23 |     2506 | 2024-03-26 | BOSS             | W   | 0.489      | -            | -                | -                | -         |     3.31 | dare, dea, Peeping, shane, snav     |
|           22 |     2513 | 2024-03-26 | BOSS             | W   | 0.489      | -            | -                | -                | -         |     3.40 | dare, dea, Peeping, shane, snav     |
|           21 |     2680 | 2024-03-15 | Carpe Diem       | W   | 0.416      | -            | -                | -                | -         |     2.49 | dare, dea, Peeping, shane, snav     |
|           20 |     2682 | 2024-03-15 | Carpe Diem       | W   | 0.416      | -            | -                | -                | -         |     2.54 | dare, dea, Peeping, shane, snav     |
|           19 |     2780 | 2024-03-12 | Party Astronauts | L   | 0.395      | -            | -                | -                | -         |    -7.45 | dare, dea, Peeping, shane, snav     |
|           18 |     2880 | 2024-03-08 | Spirit           | L   | 0.366      | -            | -                | -                | -         |    -0.06 | dare, MRC9, Peeping, shane, snav    |
|           17 |     3031 | 2024-03-02 | ODDIK            | L   | 0.328      | -            | -                | -                | -         |    -6.67 | dare, nbgee12, Peeping, shane, snav |
|           16 |     3061 | 2024-03-01 | Complexity       | L   | 0.320      | -            | -                | -                | -         |    -0.16 | dare, nbgee12, Peeping, shane, snav |
|           15 |     3449 | 2024-02-13 | Mythic           | L   | 0.209      | -            | -                | -                | -         |    -5.11 | dare, dea, Peeping, shane, snav     |
|           14 |     3451 | 2024-02-13 | Mythic           | W   | 0.209      | -            | -                | -                | -         |     1.50 | dare, dea, Peeping, shane, snav     |
|           13 |     3557 | 2024-02-04 | Wildcard         | W   | 0.149      | -            | -                | -                | -         |     1.65 | dare, dea, Peeping, shane, snav     |
|           12 |     3584 | 2024-02-03 | NRG              | W   | 0.142      | -            | -                | -                | -         |     1.16 | dare, dea, Peeping, shane, snav     |
|           11 |     3646 | 2024-02-01 | Nouns            | W   | 0.129      | -            | -                | -                | -         |     1.50 | dare, dea, Peeping, shane, snav     |
|           10 |     3649 | 2024-02-01 | BOSS             | W   | 0.128      | -            | -                | -                | -         |     0.85 | dare, dea, Peeping, shane, snav     |
|            9 |     3996 | 2024-01-18 | NRG              | L   | 0.035      | -            | -                | -                | -         |    -0.82 | dare, dea, Peeping, shane, snav     |
|            8 |     4046 | 2024-01-17 | regain           | W   | 0.029      | -            | -                | -                | -         |     0.03 | dare, dea, Peeping, shane, snav     |
|            7 |     4088 | 2024-01-16 | Liquid           | L   | 0.023      | -            | -                | -                | -         |    -0.03 | dare, dea, Peeping, shane, snav     |
|            6 |     4093 | 2024-01-16 | NRG              | W   | 0.022      | -            | -                | -                | -         |     0.18 | dare, dea, Peeping, shane, snav     |
|            5 |     4098 | 2024-01-16 | Party Astronauts | W   | 0.022      | -            | -                | -                | -         |     0.27 | dare, dea, Peeping, shane, snav     |
|            4 |     4140 | 2024-01-15 | Mythic           | W   | 0.015      | -            | -                | -                | -         |     0.11 | dare, dea, Peeping, shane, snav     |
|            3 |     4167 | 2024-01-14 | Party Astronauts | W   | 0.010      | -            | -                | -                | -         |     0.13 | dare, dea, Peeping, shane, snav     |
|            2 |     4176 | 2024-01-14 | For Fun          | W   | 0.008      | -            | -                | -                | -         |     0.03 | dare, dea, Peeping, shane, snav     |
|            1 |     4195 | 2024-01-13 | Liquid           | L   | 0.002      | -            | -                | -                | -         |    -0.00 | dare, dea, Peeping, shane, snav     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,608.74)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-23 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-06-09 |      0.989 | $4,250.00      | $4,203.78       |
| 2024-03-10 |      0.381 | $5,000.00      | $1,904.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
