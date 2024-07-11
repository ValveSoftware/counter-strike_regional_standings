### Roster Details<br />
Team Name: M80<br />
Roster: malbsMd, reck, s1n, slaxz-, Swisher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [30](../standings_global.md)<br />
Regional Rank: [8]( ../standings_americas.md)<br />
Final Rank Value:  1270.1<br />
<br />
Final Rank Value (1270.1) = Starting Rank Value (1263.0) + Head To Head Adjustments (7.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.602[<sup>1</sup>](#table2)
- Bounty Collected: 0.470[<sup>2</sup>](#table1)
- Opponent Network: 0.234[<sup>2</sup>](#table1)
- LAN Wins: 0.331[<sup>2</sup>](#table1)

The average of these factors is 0.409<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1263.0
- 400 + ( ( 0.409 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1263.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           60 |      358 | 2024-06-09 | Wildcard         | W   | 0.989      | 0.477        | 0.073 (0.034)    | 0.569 (0.268)    | 0 (0.000) |     6.34 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           59 |      372 | 2024-06-09 | NRG              | L   | 0.987      | -            | -                | -                | -         |   -25.91 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           58 |      425 | 2024-06-08 | Legacy           | W   | 0.981      | 0.143        | 0.160 (0.022)    | -                | 0 (0.000) |     7.67 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           57 |      532 | 2024-06-06 | Wildcard         | W   | 0.969      | 0.477        | 0.073 (0.034)    | 0.569 (0.263)    | 0 (0.000) |     5.70 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           56 |      552 | 2024-06-06 | Wildcard         | W   | 0.967      | -            | -                | -                | 0 (0.000) |     6.50 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           55 |      562 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.967      | -            | -                | -                | -         |     1.80 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           54 |      602 | 2024-06-05 | Nouns            | W   | 0.962      | 0.477        | 0.086 (0.039)    | 0.484 (0.222)    | -         |     7.45 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           53 |      859 | 2024-05-28 | HEROIC           | L   | 0.907      | -            | -                | -                | -         |    -2.11 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           52 |      877 | 2024-05-27 | FaZe             | L   | 0.901      | -            | -                | -                | -         |    -0.66 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           51 |      932 | 2024-05-24 | Nouns            | W   | 0.883      | 0.384        | 0.086 (0.029)    | -                | -         |     6.74 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           50 |      947 | 2024-05-23 | Wildcard         | W   | 0.875      | 0.384        | 0.073 (0.024)    | 0.569 (0.191)    | -         |     5.71 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           49 |      972 | 2024-05-22 | Party Astronauts | L   | 0.868      | -            | -                | -                | -         |   -21.96 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           48 |      977 | 2024-05-22 | Party Astronauts | W   | 0.868      | 0.477        | 0.062 (0.026)    | 0.589 (0.244)    | -         |     5.09 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           47 |      983 | 2024-05-22 | Mythic           | W   | 0.868      | -            | -                | -                | -         |     2.77 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           46 |     1047 | 2024-05-20 | NRG              | W   | 0.856      | 0.477        | -                | 0.478 (0.195)    | -         |     4.88 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           45 |     1052 | 2024-05-20 | NRG              | W   | 0.855      | 0.477        | -                | 0.478 (0.195)    | -         |     5.10 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           44 |     1062 | 2024-05-20 | E-Xolos LAZER    | W   | 0.854      | -            | -                | -                | -         |     1.52 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           43 |     1086 | 2024-05-19 | BOSS             | W   | 0.848      | -            | -                | -                | -         |     2.23 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           42 |     1088 | 2024-05-19 | BOSS             | W   | 0.848      | -            | -                | -                | -         |     2.28 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           41 |     1111 | 2024-05-18 | Nouns            | L   | 0.842      | -            | -                | -                | -         |   -21.68 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           40 |     1145 | 2024-05-17 | regain           | W   | 0.835      | -            | -                | -                | -         |     0.34 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           39 |     1218 | 2024-05-15 | One More         | W   | 0.822      | -            | -                | -                | -         |     1.17 | malbsMd, reck, slaxz-, stamina, Swisher |
|           38 |     1224 | 2024-05-15 | One More         | W   | 0.822      | -            | -                | -                | -         |     1.18 | malbsMd, reck, slaxz-, stamina, Swisher |
|           37 |     1267 | 2024-05-14 | Elevate          | W   | 0.816      | 0.477        | -                | 0.596 (0.232)    | -         |     5.63 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           36 |     1273 | 2024-05-14 | Elevate          | W   | 0.816      | 0.477        | -                | 0.596 (0.232)    | -         |     5.92 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           35 |     1396 | 2024-05-10 | Limitless        | W   | 0.789      | -            | -                | -                | -         |     0.90 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           34 |     1398 | 2024-05-10 | Limitless        | W   | 0.789      | -            | -                | -                | -         |     0.91 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           33 |     1413 | 2024-05-09 | LAG              | W   | 0.782      | -            | -                | -                | -         |     2.77 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           32 |     1418 | 2024-05-09 | LAG              | W   | 0.782      | -            | -                | -                | -         |     2.85 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           31 |     1644 | 2024-04-28 | G2               | L   | 0.707      | -            | -                | -                | -         |    -0.65 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           30 |     1669 | 2024-04-27 | TYLOO            | W   | 0.700      | 0.889        | 0.050 (0.031)    | -                | 1 (0.700) |     2.04 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           29 |     1689 | 2024-04-26 | BetBoom          | L   | 0.694      | -            | -                | -                | -         |    -3.07 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           28 |     1699 | 2024-04-26 | G2               | W   | 0.693      | 0.889        | 0.745 (0.459)    | 0.481 (0.296)    | 1 (0.693) |    21.25 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           27 |     1724 | 2024-04-25 | Sharks           | W   | 0.687      | -            | -                | -                | 1 (0.687) |     1.68 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           26 |     1758 | 2024-04-23 | BetBoom          | L   | 0.674      | -            | -                | -                | -         |    -2.86 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           25 |     1844 | 2024-04-19 | Liquid           | W   | 0.649      | 0.143        | 0.494 (0.046)    | -                | -         |    18.38 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           24 |     1851 | 2024-04-19 | Legacy           | W   | 0.648      | -            | -                | -                | -         |     7.57 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           23 |     1894 | 2024-04-18 | Liquid           | L   | 0.643      | -            | -                | -                | -         |    -1.88 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           22 |     1899 | 2024-04-18 | Elevate          | W   | 0.641      | -            | -                | -                | -         |     6.21 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           21 |     2468 | 2024-03-27 | Take Flyte       | W   | 0.495      | -            | -                | -                | -         |     1.34 | malbsMd, reck, s1n, stamina, Swisher    |
|           20 |     2473 | 2024-03-27 | Take Flyte       | W   | 0.495      | -            | -                | -                | -         |     1.36 | malbsMd, reck, s1n, stamina, Swisher    |
|           19 |     2611 | 2024-03-19 | Mythic           | L   | 0.443      | -            | -                | -                | -         |   -12.09 | dephh, malbsMd, reck, stamina, Swisher  |
|           18 |     2614 | 2024-03-19 | Mythic           | L   | 0.442      | -            | -                | -                | -         |   -12.29 | dephh, malbsMd, reck, stamina, Swisher  |
|           17 |     2702 | 2024-03-14 | Nouns            | L   | 0.409      | -            | -                | -                | -         |   -10.19 | dephh, malbsMd, reck, stamina, Swisher  |
|           16 |     2705 | 2024-03-14 | Nouns            | L   | 0.409      | -            | -                | -                | -         |   -10.42 | dephh, malbsMd, reck, stamina, Swisher  |
|           15 |     2734 | 2024-03-13 | Wildcard         | L   | 0.403      | -            | -                | -                | -         |   -10.63 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           14 |     2736 | 2024-03-13 | Wildcard         | W   | 0.402      | -            | -                | -                | -         |     2.04 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           13 |     2989 | 2024-03-04 | Legacy           | L   | 0.341      | -            | -                | -                | -         |    -7.65 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           12 |     3015 | 2024-03-03 | Wildcard         | W   | 0.333      | -            | -                | -                | 1 (0.333) |     1.73 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           11 |     3040 | 2024-03-02 | Imperial         | L   | 0.327      | -            | -                | -                | -         |    -2.20 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           10 |     3059 | 2024-03-01 | ODDIK            | W   | 0.321      | -            | -                | -                | 1 (0.321) |     1.64 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            9 |     3621 | 2024-02-02 | Rebels           | L   | 0.134      | -            | -                | -                | -         |    -3.13 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            8 |     3657 | 2024-02-01 | Rooster          | W   | 0.126      | -            | -                | -                | 1 (0.126) |     0.31 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            7 |     3676 | 2024-01-31 | GamerLegion      | L   | 0.120      | -            | -                | -                | -         |    -3.19 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            6 |     3878 | 2024-01-20 | Liquid           | W   | 0.050      | -            | -                | -                | -         |     1.38 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            5 |     3883 | 2024-01-20 | Wildcard         | W   | 0.049      | -            | -                | -                | -         |     0.24 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            4 |     3926 | 2024-01-19 | BOSS             | W   | 0.043      | -            | -                | -                | -         |     0.11 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            3 |     3932 | 2024-01-19 | Wildcard         | L   | 0.042      | -            | -                | -                | -         |    -1.12 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            2 |     4171 | 2024-01-14 | Nouns            | W   | 0.009      | -            | -                | -                | -         |     0.05 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            1 |     4189 | 2024-01-13 | Wildcard         | L   | 0.003      | -            | -                | -                | -         |    -0.08 | malbsMd, maNkz, reck, slaxz-, Swisher   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56,347.12)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.989 | $25,000.00     | $24,728.10      |
| 2024-06-02 |      0.941 | $4,000.00      | $3,764.01       |
| 2024-05-24 |      0.883 | $20,000.00     | $17,651.55      |
| 2024-05-12 |      0.800 | $12,000.00     | $9,598.27       |
| 2024-02-02 |      0.134 | $4,500.00      | $605.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
