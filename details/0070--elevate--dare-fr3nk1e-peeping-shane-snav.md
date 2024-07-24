### Roster Details<br />
Team Name: Elevate<br />
Roster: dare, Fr3nk1e, Peeping, shane, snav<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [70](../standings_global.md)<br />
Regional Rank: [20]( ../standings_americas.md)<br />
Final Rank Value:  974.3<br />
<br />
Final Rank Value (974.3) = Starting Rank Value (1038.9) + Head To Head Adjustments (-64.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.408[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.163[<sup>2</sup>](#table1)
- LAN Wins: 0.352[<sup>2</sup>](#table1)

The average of these factors is 0.316<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1038.9
- 400 + ( ( 0.316 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1038.9


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
|           68 |       83 | 2024-07-21 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -13.54 | dare, Fr3nk1e, Peeping, shane, snav |
|           67 |      111 | 2024-07-20 | Perseverance     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.30 | dare, Fr3nk1e, Peeping, shane, snav |
|           66 |      181 | 2024-07-18 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -21.43 | dare, Fr3nk1e, Peeping, shane, snav |
|           65 |      183 | 2024-07-18 | BOSS             | W   | 1.000      | 0.477        | 0.018 (0.009)    | 0.378 (0.180)    | 0 (0.000) |     9.64 | dare, Fr3nk1e, Peeping, shane, snav |
|           64 |      245 | 2024-07-17 | Perseverance     | W   | 1.000      | 0.477        | -                | 0.243 (0.116)    | 0 (0.000) |     5.27 | dare, Fr3nk1e, Peeping, shane, snav |
|           63 |      249 | 2024-07-17 | Perseverance     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.54 | dare, Fr3nk1e, Peeping, shane, snav |
|           62 |      307 | 2024-07-16 | Mythic           | W   | 1.000      | 0.477        | -                | 0.310 (0.148)    | 0 (0.000) |     8.18 | dare, Fr3nk1e, Peeping, shane, snav |
|           61 |      314 | 2024-07-16 | Mythic           | W   | 1.000      | 0.477        | -                | 0.310 (0.148)    | 0 (0.000) |     8.76 | dare, Fr3nk1e, Peeping, shane, snav |
|           60 |      360 | 2024-07-15 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -20.01 | dare, dea, Peeping, shane, snav     |
|           59 |      365 | 2024-07-15 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -21.66 | dare, dea, Peeping, shane, snav     |
|           58 |      575 | 2024-06-23 | Locke's Kittens  | W   | 0.996      | -            | -                | -                | 1 (0.996) |     7.08 | dare, dea, Peeping, shane, snav     |
|           57 |      577 | 2024-06-23 | WICKED           | W   | 0.994      | -            | -                | -                | 1 (0.994) |     3.00 | dare, dea, Peeping, shane, snav     |
|           56 |      583 | 2024-06-22 | LOCK IN          | W   | 0.988      | -            | -                | -                | 1 (0.988) |     1.06 | dare, dea, Peeping, shane, snav     |
|           55 |      598 | 2024-06-16 | Legacy           | L   | 0.948      | -            | -                | -                | -         |   -12.05 | dare, dea, Peeping, shane, snav     |
|           54 |      621 | 2024-06-15 | BOSS             | W   | 0.943      | 0.371        | 0.018 (0.006)    | 0.378 (0.132)    | 0 (0.000) |     6.96 | dare, dea, Peeping, shane, snav     |
|           53 |      656 | 2024-06-14 | FLUFFY AIMERS    | W   | 0.936      | -            | -                | -                | -         |     4.50 | dare, dea, Peeping, shane, snav     |
|           52 |      934 | 2024-06-07 | Nouns            | L   | 0.888      | -            | -                | -                | -         |   -14.35 | dare, dea, Peeping, shane, snav     |
|           51 |      939 | 2024-06-07 | Nouns            | W   | 0.887      | 0.143        | 0.073 (0.009)    | -                | -         |    13.71 | dare, dea, Peeping, shane, snav     |
|           50 |      943 | 2024-06-07 | Legacy           | L   | 0.887      | -            | -                | -                | -         |   -12.08 | dare, dea, Peeping, shane, snav     |
|           49 |      983 | 2024-06-06 | Nouns            | L   | 0.882      | -            | -                | -                | -         |   -14.21 | dare, dea, Peeping, shane, snav     |
|           48 |      995 | 2024-06-06 | FlyQuest RED     | W   | 0.881      | 0.384        | 0.023 (0.008)    | -                | -         |     5.45 | dare, dea, Peeping, shane, snav     |
|           47 |     1052 | 2024-06-05 | Mythic           | W   | 0.876      | 0.477        | -                | 0.310 (0.129)    | -         |     7.59 | dare, dea, Peeping, shane, snav     |
|           46 |     1104 | 2024-06-04 | Party Astronauts | L   | 0.869      | -            | -                | -                | -         |   -15.36 | dare, dea, Peeping, shane, snav     |
|           45 |     1415 | 2024-05-22 | NRG              | W   | 0.782      | 0.477        | 0.025 (0.009)    | 0.574 (0.214)    | -         |     9.58 | dare, dea, Peeping, shane, snav     |
|           44 |     1420 | 2024-05-22 | NRG              | W   | 0.782      | 0.477        | 0.025 (0.009)    | 0.574 (0.214)    | -         |    10.23 | dare, dea, Peeping, shane, snav     |
|           43 |     1463 | 2024-05-21 | Take Flyte       | W   | 0.776      | -            | -                | -                | -         |     3.35 | dare, dea, Peeping, shane, snav     |
|           42 |     1467 | 2024-05-21 | Take Flyte       | W   | 0.775      | -            | -                | -                | -         |     3.46 | dare, dea, Peeping, shane, snav     |
|           41 |     1502 | 2024-05-20 | Mythic           | L   | 0.769      | -            | -                | -                | -         |   -18.25 | dare, dea, Peeping, shane, snav     |
|           40 |     1595 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.749      | -            | -                | -                | -         |     3.62 | dare, dea, Peeping, shane, snav     |
|           39 |     1596 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.749      | -            | -                | -                | -         |     3.75 | dare, dea, Peeping, shane, snav     |
|           38 |     1666 | 2024-05-15 | Limitless        | W   | 0.735      | -            | -                | -                | -         |     2.61 | dare, dea, Peeping, shane, snav     |
|           37 |     1673 | 2024-05-15 | Limitless        | W   | 0.735      | -            | -                | -                | -         |     2.68 | dare, dea, Peeping, shane, snav     |
|           36 |     1719 | 2024-05-14 | M80              | L   | 0.729      | -            | -                | -                | -         |    -3.54 | dare, dea, Peeping, shane, snav     |
|           35 |     1725 | 2024-05-14 | M80              | L   | 0.729      | -            | -                | -                | -         |    -3.66 | dare, dea, Peeping, shane, snav     |
|           34 |     1736 | 2024-05-14 | Perseverance     | W   | 0.728      | -            | -                | -                | -         |     4.55 | dare, dea, Peeping, shane, snav     |
|           33 |     1740 | 2024-05-14 | Perseverance     | W   | 0.728      | -            | -                | -                | -         |     4.74 | dare, dea, Peeping, shane, snav     |
|           32 |     1794 | 2024-05-12 | NRG              | L   | 0.715      | -            | -                | -                | -         |   -14.55 | dare, dea, intra, Peeping, snav     |
|           31 |     1814 | 2024-05-11 | Nouns            | W   | 0.708      | 0.270        | 0.073 (0.014)    | -                | -         |     9.70 | dare, dea, intra, Peeping, snav     |
|           30 |     1815 | 2024-05-11 | Wildcard         | W   | 0.708      | 0.270        | 0.069 (0.013)    | -                | -         |     9.01 | dare, dea, intra, Peeping, snav     |
|           29 |     1818 | 2024-05-11 | Nouns            | L   | 0.708      | -            | -                | -                | -         |   -12.10 | dare, dea, intra, Peeping, snav     |
|           28 |     1885 | 2024-05-08 | MIGHT            | W   | 0.689      | -            | -                | -                | -         |     1.50 | dare, dea, Peeping, shane, snav     |
|           27 |     1887 | 2024-05-08 | MIGHT            | W   | 0.689      | -            | -                | -                | -         |     1.52 | dare, dea, Peeping, shane, snav     |
|           26 |     1909 | 2024-05-07 | Party Astronauts | W   | 0.682      | 0.477        | 0.053 (0.017)    | 0.591 (0.193)    | -         |     9.69 | dare, dea, Peeping, shane, snav     |
|           25 |     1910 | 2024-05-07 | Party Astronauts | L   | 0.682      | -            | -                | -                | -         |   -12.08 | dare, dea, Peeping, shane, snav     |
|           24 |     2206 | 2024-04-23 | Wildcard         | L   | 0.589      | -            | -                | -                | -         |   -11.44 | dare, dea, Peeping, shane, snav     |
|           23 |     2208 | 2024-04-23 | Wildcard         | W   | 0.589      | 0.477        | 0.069 (0.019)    | 0.557 (0.156)    | -         |     7.20 | dare, dea, Peeping, shane, snav     |
|           22 |     2343 | 2024-04-18 | Legacy           | L   | 0.556      | -            | -                | -                | -         |    -7.95 | dare, dea, Peeping, shane, snav     |
|           21 |     2351 | 2024-04-18 | M80              | L   | 0.555      | -            | -                | -                | -         |    -3.40 | dare, dea, Peeping, shane, snav     |
|           20 |     2395 | 2024-04-17 | Nouns            | W   | 0.549      | -            | -                | -                | -         |     7.28 | dare, dea, Peeping, shane, snav     |
|           19 |     2400 | 2024-04-17 | Wildcard         | W   | 0.548      | -            | -                | -                | -         |     6.93 | dare, dea, Peeping, shane, snav     |
|           18 |     2549 | 2024-04-10 | Nouns            | L   | 0.502      | -            | -                | -                | -         |    -9.42 | dare, dea, Peeping, shane, snav     |
|           17 |     2555 | 2024-04-10 | Nouns            | L   | 0.502      | -            | -                | -                | -         |    -9.83 | dare, dea, Peeping, shane, snav     |
|           16 |     2783 | 2024-04-03 | LAG              | W   | 0.456      | -            | -                | -                | -         |     4.57 | dare, dea, Peeping, shane, snav     |
|           15 |     2786 | 2024-04-03 | LAG              | L   | 0.455      | -            | -                | -                | -         |   -10.00 | dare, dea, Peeping, shane, snav     |
|           14 |     2958 | 2024-03-26 | BOSS             | W   | 0.403      | -            | -                | -                | -         |     3.07 | dare, dea, Peeping, shane, snav     |
|           13 |     2965 | 2024-03-26 | BOSS             | W   | 0.402      | -            | -                | -                | -         |     3.15 | dare, dea, Peeping, shane, snav     |
|           12 |     3132 | 2024-03-15 | Carpe Diem       | W   | 0.329      | -            | -                | -                | -         |     1.38 | dare, dea, Peeping, shane, snav     |
|           11 |     3134 | 2024-03-15 | Carpe Diem       | W   | 0.329      | -            | -                | -                | -         |     1.40 | dare, dea, Peeping, shane, snav     |
|           10 |     3232 | 2024-03-12 | Party Astronauts | L   | 0.309      | -            | -                | -                | -         |    -5.99 | dare, dea, Peeping, shane, snav     |
|            9 |     3332 | 2024-03-08 | Spirit           | L   | 0.279      | -            | -                | -                | -         |    -0.06 | dare, MRC9, Peeping, shane, snav    |
|            8 |     3483 | 2024-03-02 | ODDIK            | L   | 0.241      | -            | -                | -                | -         |    -4.16 | dare, nbgee12, Peeping, shane, snav |
|            7 |     3513 | 2024-03-01 | Complexity       | L   | 0.234      | -            | -                | -                | -         |    -0.19 | dare, nbgee12, Peeping, shane, snav |
|            6 |     3901 | 2024-02-13 | Mythic           | L   | 0.123      | -            | -                | -                | -         |    -3.04 | dare, dea, Peeping, shane, snav     |
|            5 |     3903 | 2024-02-13 | Mythic           | W   | 0.122      | -            | -                | -                | -         |     0.83 | dare, dea, Peeping, shane, snav     |
|            4 |     4009 | 2024-02-04 | Wildcard         | W   | 0.062      | -            | -                | -                | -         |     0.69 | dare, dea, Peeping, shane, snav     |
|            3 |     4036 | 2024-02-03 | NRG              | W   | 0.055      | -            | -                | -                | -         |     0.46 | dare, dea, Peeping, shane, snav     |
|            2 |     4098 | 2024-02-01 | Nouns            | W   | 0.042      | -            | -                | -                | -         |     0.45 | dare, dea, Peeping, shane, snav     |
|            1 |     4101 | 2024-02-01 | BOSS             | W   | 0.041      | -            | -                | -                | -         |     0.31 | dare, dea, Peeping, shane, snav     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,717.41)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-23 |      0.996 | $3,000.00      | $2,988.43       |
| 2024-06-16 |      0.949 | $1,500.00      | $1,423.47       |
| 2024-06-09 |      0.902 | $4,250.00      | $3,834.73       |
| 2024-03-10 |      0.294 | $5,000.00      | $1,470.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
