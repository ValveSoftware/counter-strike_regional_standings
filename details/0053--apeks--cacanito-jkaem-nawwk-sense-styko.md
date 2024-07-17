### Roster Details<br />
Team Name: Apeks<br />
Roster: CacaNito, jkaem, nawwk, sense, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [53](../standings_global.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
Final Rank Value:  1091.5<br />
<br />
Final Rank Value (1091.5) = Starting Rank Value (1032.6) + Head To Head Adjustments (58.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.438[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.291[<sup>2</sup>](#table1)

The average of these factors is 0.295<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1032.6
- 400 + ( ( 0.295 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1032.6


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
|           40 |     1824 | 2024-04-27 | MIBR              | L   | 0.664      | -            | -                | -                | -         |    -1.29 | CacaNito, jkaem, nawwk, sense, STYKO |
|           39 |     1873 | 2024-04-25 | Aurora            | W   | 0.651      | 0.500        | 0.514 (0.167)    | 0.813 (0.265)    | 1 (0.651) |    19.55 | CacaNito, jkaem, nawwk, sense, STYKO |
|           38 |     1879 | 2024-04-25 | sunday school     | W   | 0.649      | -            | -                | -                | 1 (0.649) |     1.93 | CacaNito, jkaem, nawwk, sense, STYKO |
|           37 |     2068 | 2024-04-18 | BetBoom           | L   | 0.601      | -            | -                | -                | -         |    -1.09 | CacaNito, jkaem, nawwk, sense, STYKO |
|           36 |     2071 | 2024-04-18 | DMS               | W   | 0.600      | 0.143        | -                | 0.494 (0.042)    | 0 (0.000) |     5.48 | CacaNito, jkaem, nawwk, sense, STYKO |
|           35 |     2084 | 2024-04-18 | AMKAL             | W   | 0.600      | 0.143        | 0.134 (0.011)    | 0.523 (0.045)    | 0 (0.000) |    11.39 | CacaNito, jkaem, nawwk, sense, STYKO |
|           34 |     2248 | 2024-04-11 | Aurora            | L   | 0.554      | -            | -                | -                | -         |    -0.69 | CacaNito, jkaem, nawwk, sense, STYKO |
|           33 |     2287 | 2024-04-10 | AMKAL             | L   | 0.548      | -            | -                | -                | -         |    -7.64 | CacaNito, jkaem, nawwk, sense, STYKO |
|           32 |     2340 | 2024-04-09 | fnatic            | W   | 0.541      | 0.143        | 0.300 (0.023)    | 0.632 (0.049)    | -         |    16.17 | CacaNito, jkaem, nawwk, sense, STYKO |
|           31 |     2348 | 2024-04-09 | KOI               | W   | 0.540      | 0.143        | 0.091 (0.007)    | 0.448 (0.035)    | -         |    11.56 | CacaNito, jkaem, nawwk, sense, STYKO |
|           30 |     2369 | 2024-04-08 | fnatic            | L   | 0.535      | -            | -                | -                | -         |    -0.78 | CacaNito, jkaem, nawwk, sense, STYKO |
|           29 |     2385 | 2024-04-08 | GUN5              | W   | 0.533      | -            | -                | -                | -         |     0.46 | CacaNito, jkaem, nawwk, sense, STYKO |
|           28 |     2526 | 2024-04-03 | Monte             | L   | 0.500      | -            | -                | -                | -         |    -6.21 | CacaNito, jkaem, nawwk, sense, STYKO |
|           27 |     2555 | 2024-04-02 | Aurora            | L   | 0.494      | -            | -                | -                | -         |    -0.53 | CacaNito, jkaem, nawwk, sense, STYKO |
|           26 |     2562 | 2024-04-02 | B8                | W   | 0.493      | 0.143        | 0.246 (0.017)    | 1.000 (0.070)    | -         |    10.44 | CacaNito, jkaem, nawwk, sense, STYKO |
|           25 |     2588 | 2024-03-31 | B8                | L   | 0.479      | -            | -                | -                | -         |    -4.99 | CacaNito, jkaem, nawwk, sense, STYKO |
|           24 |     2620 | 2024-03-28 | 3DMAX             | L   | 0.460      | -            | -                | -                | -         |    -3.81 | CacaNito, jkaem, nawwk, sense, STYKO |
|           23 |     2685 | 2024-03-26 | FORZE             | L   | 0.446      | -            | -                | -                | -         |    -7.58 | CacaNito, jkaem, nawwk, sense, STYKO |
|           22 |     2786 | 2024-03-19 | Legacy            | L   | 0.400      | -            | -                | -                | -         |    -5.09 | CacaNito, jkaem, nawwk, sense, STYKO |
|           21 |     2798 | 2024-03-18 | Imperial          | L   | 0.392      | -            | -                | -                | -         |    -1.04 | CacaNito, jkaem, nawwk, sense, STYKO |
|           20 |     2815 | 2024-03-17 | AMKAL             | W   | 0.388      | 0.143        | 0.134 (0.007)    | 0.523 (0.029)    | 1 (0.388) |     7.04 | CacaNito, jkaem, nawwk, sense, STYKO |
|           19 |     2827 | 2024-03-17 | paiN              | L   | 0.386      | -            | -                | -                | -         |    -0.60 | CacaNito, jkaem, nawwk, sense, STYKO |
|           18 |     2957 | 2024-03-12 | Metizport         | L   | 0.353      | -            | -                | -                | -         |    -6.51 | CacaNito, jkaem, nawwk, sense, STYKO |
|           17 |     2966 | 2024-03-11 | Virtus.pro        | L   | 0.348      | -            | -                | -                | -         |    -0.23 | CacaNito, jkaem, nawwk, sense, STYKO |
|           16 |     2975 | 2024-03-11 | KOI               | W   | 0.347      | 0.143        | 0.091 (0.005)    | 0.448 (0.022)    | -         |     7.68 | CacaNito, jkaem, nawwk, sense, STYKO |
|           15 |     3069 | 2024-03-07 | Space             | W   | 0.321      | 0.500        | -                | 0.430 (0.069)    | -         |     2.84 | CacaNito, jkaem, nawwk, sense, STYKO |
|           14 |     3096 | 2024-03-06 | PARIVISION        | L   | 0.314      | -            | -                | -                | -         |    -5.99 | CacaNito, jkaem, nawwk, sense, STYKO |
|           13 |     3406 | 2024-02-21 | Gaimin Gladiators | W   | 0.219      | -            | -                | -                | 1 (0.219) |     4.03 | CacaNito, jkaem, nawwk, sense, STYKO |
|           12 |     3438 | 2024-02-20 | Monte             | W   | 0.212      | -            | -                | -                | 1 (0.212) |     4.19 | CacaNito, jkaem, nawwk, sense, STYKO |
|           11 |     3451 | 2024-02-19 | Cloud9            | L   | 0.207      | -            | -                | -                | -         |    -1.89 | CacaNito, jkaem, nawwk, sense, STYKO |
|           10 |     3462 | 2024-02-19 | OG                | W   | 0.206      | 0.143        | 0.210 (0.006)    | -                | 1 (0.206) |     4.07 | CacaNito, jkaem, nawwk, sense, STYKO |
|            9 |     3645 | 2024-02-11 | Metizport         | L   | 0.155      | -            | -                | -                | -         |    -2.92 | CacaNito, jkaem, nawwk, sense, STYKO |
|            8 |     3648 | 2024-02-11 | 3DMAX             | W   | 0.154      | 0.143        | 0.209 (0.005)    | 1.000 (0.022)    | -         |     3.67 | CacaNito, jkaem, nawwk, sense, STYKO |
|            7 |     3661 | 2024-02-10 | Metizport         | W   | 0.146      | -            | -                | -                | -         |     1.86 | CacaNito, jkaem, nawwk, sense, STYKO |
|            6 |     3664 | 2024-02-10 | ex-Anonymo        | W   | 0.146      | -            | -                | -                | -         |     0.13 | CacaNito, jkaem, nawwk, sense, STYKO |
|            5 |     3728 | 2024-02-04 | Natus Vincere     | L   | 0.107      | -            | -                | -                | -         |    -0.03 | CacaNito, jkaem, nawwk, sense, STYKO |
|            4 |     3753 | 2024-02-03 | Complexity        | L   | 0.101      | -            | -                | -                | -         |    -0.04 | CacaNito, jkaem, nawwk, sense, STYKO |
|            3 |     3781 | 2024-02-02 | BIG               | W   | 0.095      | -            | -                | -                | 1 (0.095) |     2.63 | CacaNito, jkaem, nawwk, sense, STYKO |
|            2 |     3816 | 2024-02-01 | FURIA             | W   | 0.088      | 0.143        | 0.253 (0.003)    | -                | 1 (0.088) |     2.69 | CacaNito, jkaem, nawwk, sense, STYKO |
|            1 |     3841 | 2024-01-31 | Spirit            | L   | 0.080      | -            | -                | -                | -         |    -0.01 | CacaNito, jkaem, nawwk, sense, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,736.83)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.948 | $500.00        | $473.80         |
| 2024-04-28 |      0.665 | $10,000.00     | $6,650.34       |
| 2024-03-20 |      0.407 | $10,000.00     | $4,073.34       |
| 2024-02-11 |      0.154 | $10,000.00     | $1,539.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
