### Roster Details<br />
Team Name: M80<br />
Roster: malbsMd, reck, s1n, slaxz-, Swisher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [30](../standings_global.md)<br />
Regional Rank: [8]( ../standings_americas.md)<br />
Final Rank Value:  1268.6<br />
<br />
Final Rank Value (1268.6) = Starting Rank Value (1280.9) + Head To Head Adjustments (-12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.593[<sup>1</sup>](#table2)
- Bounty Collected: 0.486[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.395[<sup>2</sup>](#table1)

The average of these factors is 0.434<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1280.9
- 400 + ( ( 0.434 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1280.9


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
|           62 |      222 | 2024-06-09 | Wildcard         | W   | 1.000      | 0.477        | 0.068 (0.033)    | 0.572 (0.273)    | 0 (0.000) |     6.43 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           61 |      236 | 2024-06-09 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -26.30 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           60 |      289 | 2024-06-08 | Legacy           | W   | 1.000      | 0.143        | 0.146 (0.021)    | -                | 0 (0.000) |     7.96 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           59 |      396 | 2024-06-06 | Wildcard         | W   | 1.000      | 0.477        | 0.068 (0.033)    | 0.572 (0.273)    | 0 (0.000) |     5.93 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           58 |      416 | 2024-06-06 | Wildcard         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.81 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           57 |      426 | 2024-06-06 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | -         |     1.76 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           56 |      466 | 2024-06-05 | Nouns            | W   | 1.000      | 0.477        | 0.081 (0.039)    | 0.504 (0.240)    | -         |     7.58 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           55 |      725 | 2024-05-28 | HEROIC           | L   | 1.000      | -            | -                | -                | -         |    -2.37 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           54 |      743 | 2024-05-27 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -0.58 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           53 |      798 | 2024-05-24 | Nouns            | W   | 1.000      | 0.384        | 0.081 (0.031)    | -                | -         |     7.46 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           52 |      813 | 2024-05-23 | Wildcard         | W   | 1.000      | 0.384        | 0.068 (0.026)    | 0.572 (0.220)    | -         |     6.64 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           51 |      838 | 2024-05-22 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -25.45 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           50 |      843 | 2024-05-22 | Party Astronauts | W   | 1.000      | 0.477        | 0.055 (0.026)    | 0.600 (0.286)    | -         |     5.55 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           49 |      849 | 2024-05-22 | Mythic           | W   | 1.000      | -            | -                | -                | -         |     3.15 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           48 |      913 | 2024-05-20 | NRG              | W   | 1.000      | 0.477        | -                | 0.507 (0.242)    | -         |     5.94 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           47 |      918 | 2024-05-20 | NRG              | W   | 1.000      | 0.477        | -                | 0.507 (0.242)    | -         |     6.28 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           46 |      928 | 2024-05-20 | E-Xolos LAZER    | W   | 1.000      | -            | -                | -                | -         |     1.66 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           45 |      952 | 2024-05-19 | BOSS             | W   | 1.000      | -            | -                | -                | -         |     2.64 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           44 |      954 | 2024-05-19 | BOSS             | W   | 1.000      | -            | -                | -                | -         |     2.72 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           43 |      977 | 2024-05-18 | Nouns            | L   | 0.997      | -            | -                | -                | -         |   -26.04 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           42 |     1011 | 2024-05-17 | regain           | W   | 0.991      | -            | -                | -                | -         |     0.39 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           41 |     1084 | 2024-05-15 | One More         | W   | 0.978      | -            | -                | -                | -         |     1.34 | malbsMd, reck, slaxz-, stamina, Swisher |
|           40 |     1090 | 2024-05-15 | One More         | W   | 0.978      | -            | -                | -                | -         |     1.36 | malbsMd, reck, slaxz-, stamina, Swisher |
|           39 |     1133 | 2024-05-14 | Elevate          | W   | 0.972      | 0.477        | -                | 0.481 (0.223)    | -         |     4.65 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           38 |     1139 | 2024-05-14 | Elevate          | W   | 0.971      | 0.477        | -                | 0.481 (0.223)    | -         |     4.86 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           37 |     1262 | 2024-05-10 | Limitless        | W   | 0.945      | -            | -                | -                | -         |     1.03 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           36 |     1264 | 2024-05-10 | Limitless        | W   | 0.944      | -            | -                | -                | -         |     1.04 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           35 |     1279 | 2024-05-09 | LAG              | W   | 0.938      | -            | -                | -                | -         |     3.22 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           34 |     1284 | 2024-05-09 | LAG              | W   | 0.938      | -            | -                | -                | -         |     3.33 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           33 |     1510 | 2024-04-28 | G2               | L   | 0.863      | -            | -                | -                | -         |    -0.80 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           32 |     1535 | 2024-04-27 | TYLOO            | W   | 0.855      | 0.889        | 0.049 (0.037)    | -                | 1 (0.855) |     2.41 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           31 |     1555 | 2024-04-26 | BetBoom          | L   | 0.850      | -            | -                | -                | -         |    -4.23 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           30 |     1565 | 2024-04-26 | G2               | W   | 0.848      | 0.889        | 0.756 (0.570)    | 0.508 (0.383)    | 1 (0.848) |    26.03 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           29 |     1590 | 2024-04-25 | Sharks           | W   | 0.842      | -            | -                | -                | 1 (0.842) |     2.04 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           28 |     1624 | 2024-04-23 | BetBoom          | L   | 0.829      | -            | -                | -                | -         |    -3.99 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           27 |     1710 | 2024-04-19 | Liquid           | W   | 0.805      | 0.143        | 0.498 (0.057)    | -                | -         |    23.22 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           26 |     1717 | 2024-04-19 | Legacy           | W   | 0.804      | -            | -                | -                | -         |    10.14 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           25 |     1760 | 2024-04-18 | Liquid           | L   | 0.798      | -            | -                | -                | -         |    -1.85 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           24 |     1765 | 2024-04-18 | Elevate          | W   | 0.797      | -            | -                | -                | -         |     4.73 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           23 |     2335 | 2024-03-27 | Take Flyte       | W   | 0.651      | -            | -                | -                | -         |     1.82 | malbsMd, reck, s1n, stamina, Swisher    |
|           22 |     2340 | 2024-03-27 | Take Flyte       | W   | 0.651      | -            | -                | -                | -         |     1.85 | malbsMd, reck, s1n, stamina, Swisher    |
|           21 |     2478 | 2024-03-19 | Mythic           | L   | 0.598      | -            | -                | -                | -         |   -16.22 | dephh, malbsMd, reck, stamina, Swisher  |
|           20 |     2481 | 2024-03-19 | Mythic           | L   | 0.598      | -            | -                | -                | -         |   -16.61 | dephh, malbsMd, reck, stamina, Swisher  |
|           19 |     2569 | 2024-03-14 | Nouns            | L   | 0.565      | -            | -                | -                | -         |   -14.14 | dephh, malbsMd, reck, stamina, Swisher  |
|           18 |     2572 | 2024-03-14 | Nouns            | L   | 0.565      | -            | -                | -                | -         |   -14.59 | dephh, malbsMd, reck, stamina, Swisher  |
|           17 |     2601 | 2024-03-13 | Wildcard         | L   | 0.558      | -            | -                | -                | -         |   -14.68 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           16 |     2603 | 2024-03-13 | Wildcard         | W   | 0.558      | -            | -                | -                | -         |     2.85 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           15 |     2856 | 2024-03-04 | Legacy           | L   | 0.496      | -            | -                | -                | -         |   -11.21 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           14 |     2882 | 2024-03-03 | Wildcard         | W   | 0.489      | -            | -                | -                | 1 (0.489) |     2.57 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           13 |     2907 | 2024-03-02 | Imperial         | L   | 0.482      | -            | -                | -                | -         |    -2.94 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           12 |     2926 | 2024-03-01 | ODDIK            | W   | 0.476      | -            | -                | -                | 1 (0.476) |     2.38 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           11 |     3488 | 2024-02-02 | Rebels           | L   | 0.290      | -            | -                | -                | -         |    -6.76 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           10 |     3524 | 2024-02-01 | Rooster          | W   | 0.282      | -            | -                | -                | 1 (0.282) |     0.60 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            9 |     3543 | 2024-01-31 | GamerLegion      | L   | 0.276      | -            | -                | -                | -         |    -6.70 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            8 |     3745 | 2024-01-20 | Liquid           | W   | 0.206      | -            | -                | -                | -         |     5.79 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            7 |     3750 | 2024-01-20 | Wildcard         | W   | 0.204      | -            | -                | -                | -         |     1.02 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            6 |     3793 | 2024-01-19 | BOSS             | W   | 0.199      | -            | -                | -                | -         |     0.53 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            5 |     3799 | 2024-01-19 | Wildcard         | L   | 0.198      | -            | -                | -                | -         |    -5.28 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            4 |     4038 | 2024-01-14 | Nouns            | W   | 0.165      | -            | -                | -                | -         |     0.76 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            3 |     4056 | 2024-01-13 | Wildcard         | L   | 0.159      | -            | -                | -                | -         |    -4.30 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            2 |     4104 | 2024-01-12 | Liquid           | W   | 0.152      | -            | -                | -                | -         |     4.29 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            1 |     4112 | 2024-01-12 | Rocket           | W   | 0.151      | -            | -                | -                | -         |     0.07 | malbsMd, maNkz, reck, slaxz-, Swisher   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($61,772.07)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-24 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-12 |      0.956 | $12,000.00     | $11,466.34      |
| 2024-02-02 |      0.290 | $4,500.00      | $1,305.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
