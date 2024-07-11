### Roster Details<br />
Team Name: Apeks<br />
Roster: CacaNito, jkaem, nawwk, sense, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [50](../standings_global.md)<br />
Regional Rank: [36]( ../standings_europe.md)<br />
Final Rank Value:  1112.0<br />
<br />
Final Rank Value (1112.0) = Starting Rank Value (1048.3) + Head To Head Adjustments (63.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.441[<sup>1</sup>](#table2)
- Bounty Collected: 0.390[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.327[<sup>2</sup>](#table1)

The average of these factors is 0.307<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1048.3
- 400 + ( ( 0.307 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1048.3


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
|           40 |     1660 | 2024-04-27 | MIBR              | L   | 0.703      | -            | -                | -                | -         |    -1.46 | CacaNito, jkaem, nawwk, sense, STYKO |
|           39 |     1709 | 2024-04-25 | Aurora            | W   | 0.690      | 0.500        | 0.518 (0.179)    | 0.853 (0.294)    | 1 (0.690) |    20.60 | CacaNito, jkaem, nawwk, sense, STYKO |
|           38 |     1715 | 2024-04-25 | sunday school     | W   | 0.688      | -            | -                | -                | 1 (0.688) |     1.84 | CacaNito, jkaem, nawwk, sense, STYKO |
|           37 |     1904 | 2024-04-18 | BetBoom           | L   | 0.641      | -            | -                | -                | -         |    -1.22 | CacaNito, jkaem, nawwk, sense, STYKO |
|           36 |     1907 | 2024-04-18 | DMS               | W   | 0.640      | 0.143        | -                | 0.471 (0.043)    | 0 (0.000) |     5.02 | CacaNito, jkaem, nawwk, sense, STYKO |
|           35 |     1920 | 2024-04-18 | AMKAL             | W   | 0.640      | 0.143        | 0.135 (0.012)    | 0.559 (0.051)    | 0 (0.000) |    12.04 | CacaNito, jkaem, nawwk, sense, STYKO |
|           34 |     2084 | 2024-04-11 | Aurora            | L   | 0.593      | -            | -                | -                | -         |    -0.84 | CacaNito, jkaem, nawwk, sense, STYKO |
|           33 |     2123 | 2024-04-10 | AMKAL             | L   | 0.587      | -            | -                | -                | -         |    -8.31 | CacaNito, jkaem, nawwk, sense, STYKO |
|           32 |     2176 | 2024-04-09 | fnatic            | W   | 0.581      | 0.143        | 0.298 (0.025)    | 0.623 (0.052)    | -         |    17.24 | CacaNito, jkaem, nawwk, sense, STYKO |
|           31 |     2184 | 2024-04-09 | KOI               | W   | 0.580      | 0.143        | 0.090 (0.007)    | 0.437 (0.036)    | -         |    11.78 | CacaNito, jkaem, nawwk, sense, STYKO |
|           30 |     2205 | 2024-04-08 | fnatic            | L   | 0.574      | -            | -                | -                | -         |    -0.93 | CacaNito, jkaem, nawwk, sense, STYKO |
|           29 |     2221 | 2024-04-08 | GUN5              | W   | 0.572      | -            | -                | -                | -         |     0.44 | CacaNito, jkaem, nawwk, sense, STYKO |
|           28 |     2362 | 2024-04-03 | Monte             | L   | 0.539      | -            | -                | -                | -         |    -4.32 | CacaNito, jkaem, nawwk, sense, STYKO |
|           27 |     2391 | 2024-04-02 | Aurora            | L   | 0.534      | -            | -                | -                | -         |    -0.64 | CacaNito, jkaem, nawwk, sense, STYKO |
|           26 |     2398 | 2024-04-02 | B8                | W   | 0.533      | 0.143        | 0.242 (0.018)    | 1.000 (0.076)    | -         |    10.99 | CacaNito, jkaem, nawwk, sense, STYKO |
|           25 |     2424 | 2024-03-31 | B8                | L   | 0.519      | -            | -                | -                | -         |    -5.69 | CacaNito, jkaem, nawwk, sense, STYKO |
|           24 |     2456 | 2024-03-28 | 3DMAX             | L   | 0.500      | -            | -                | -                | -         |    -4.46 | CacaNito, jkaem, nawwk, sense, STYKO |
|           23 |     2521 | 2024-03-26 | FORZE             | L   | 0.486      | -            | -                | -                | -         |    -8.47 | CacaNito, jkaem, nawwk, sense, STYKO |
|           22 |     2622 | 2024-03-19 | Legacy            | L   | 0.439      | -            | -                | -                | -         |    -6.35 | CacaNito, jkaem, nawwk, sense, STYKO |
|           21 |     2634 | 2024-03-18 | Imperial          | L   | 0.432      | -            | -                | -                | -         |    -1.18 | CacaNito, jkaem, nawwk, sense, STYKO |
|           20 |     2651 | 2024-03-17 | AMKAL             | W   | 0.427      | 0.143        | 0.135 (0.008)    | 0.559 (0.034)    | 1 (0.427) |     7.71 | CacaNito, jkaem, nawwk, sense, STYKO |
|           19 |     2663 | 2024-03-17 | paiN              | L   | 0.425      | -            | -                | -                | -         |    -0.74 | CacaNito, jkaem, nawwk, sense, STYKO |
|           18 |     2793 | 2024-03-12 | Metizport         | L   | 0.393      | -            | -                | -                | -         |    -7.51 | CacaNito, jkaem, nawwk, sense, STYKO |
|           17 |     2802 | 2024-03-11 | Virtus.pro        | L   | 0.388      | -            | -                | -                | -         |    -0.27 | CacaNito, jkaem, nawwk, sense, STYKO |
|           16 |     2811 | 2024-03-11 | KOI               | W   | 0.387      | 0.143        | 0.090 (0.005)    | 0.437 (0.024)    | -         |     8.15 | CacaNito, jkaem, nawwk, sense, STYKO |
|           15 |     2905 | 2024-03-07 | Space             | W   | 0.360      | 0.500        | -                | 0.404 (0.073)    | -         |     2.69 | CacaNito, jkaem, nawwk, sense, STYKO |
|           14 |     2932 | 2024-03-06 | PARIVISION        | L   | 0.354      | -            | -                | -                | -         |    -6.92 | CacaNito, jkaem, nawwk, sense, STYKO |
|           13 |     3242 | 2024-02-21 | Gaimin Gladiators | W   | 0.259      | -            | -                | -                | 1 (0.259) |     4.90 | CacaNito, jkaem, nawwk, sense, STYKO |
|           12 |     3274 | 2024-02-20 | Monte             | W   | 0.252      | 0.143        | 0.188 (0.007)    | -                | 1 (0.252) |     6.21 | CacaNito, jkaem, nawwk, sense, STYKO |
|           11 |     3287 | 2024-02-19 | Cloud9            | L   | 0.247      | -            | -                | -                | -         |    -2.08 | CacaNito, jkaem, nawwk, sense, STYKO |
|           10 |     3298 | 2024-02-19 | OG                | W   | 0.245      | 0.143        | 0.215 (0.008)    | -                | 1 (0.245) |     4.85 | CacaNito, jkaem, nawwk, sense, STYKO |
|            9 |     3481 | 2024-02-11 | Metizport         | L   | 0.194      | -            | -                | -                | -         |    -3.83 | CacaNito, jkaem, nawwk, sense, STYKO |
|            8 |     3484 | 2024-02-11 | 3DMAX             | W   | 0.193      | 0.143        | 0.205 (0.006)    | 1.000 (0.028)    | -         |     4.49 | CacaNito, jkaem, nawwk, sense, STYKO |
|            7 |     3497 | 2024-02-10 | Metizport         | W   | 0.186      | -            | -                | -                | -         |     2.20 | CacaNito, jkaem, nawwk, sense, STYKO |
|            6 |     3500 | 2024-02-10 | ex-Anonymo        | W   | 0.185      | -            | -                | -                | -         |     0.22 | CacaNito, jkaem, nawwk, sense, STYKO |
|            5 |     3564 | 2024-02-04 | Natus Vincere     | L   | 0.147      | -            | -                | -                | -         |    -0.04 | CacaNito, jkaem, nawwk, sense, STYKO |
|            4 |     3589 | 2024-02-03 | Complexity        | L   | 0.141      | -            | -                | -                | -         |    -0.06 | CacaNito, jkaem, nawwk, sense, STYKO |
|            3 |     3617 | 2024-02-02 | BIG               | W   | 0.134      | -            | -                | -                | 1 (0.134) |     3.73 | CacaNito, jkaem, nawwk, sense, STYKO |
|            2 |     3652 | 2024-02-01 | FURIA             | W   | 0.128      | -            | -                | -                | 1 (0.128) |     3.90 | CacaNito, jkaem, nawwk, sense, STYKO |
|            1 |     3677 | 2024-01-31 | Spirit            | L   | 0.120      | -            | -                | -                | -         |    -0.02 | CacaNito, jkaem, nawwk, sense, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,944.94)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $500.00        | $493.61         |
| 2024-04-28 |      0.705 | $10,000.00     | $7,046.44       |
| 2024-03-20 |      0.447 | $10,000.00     | $4,469.44       |
| 2024-02-11 |      0.194 | $10,000.00     | $1,935.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
