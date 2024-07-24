### Roster Details<br />
Team Name: Apeks<br />
Roster: CacaNito, jkaem, nawwk, sense, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [62](../standings_global.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
Final Rank Value:  1015.7<br />
<br />
Final Rank Value (1015.7) = Starting Rank Value (955.7) + Head To Head Adjustments (60.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.371[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.251[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 955.7
- 400 + ( ( 0.275 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 955.7


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
|           40 |     2112 | 2024-04-27 | MIBR              | L   | 0.616      | -            | -                | -                | -         |    -1.31 | CacaNito, jkaem, nawwk, sense, STYKO |
|           39 |     2161 | 2024-04-25 | Aurora            | W   | 0.603      | 0.500        | 0.423 (0.128)    | 0.783 (0.236)    | 1 (0.603) |    18.18 | CacaNito, jkaem, nawwk, sense, STYKO |
|           38 |     2167 | 2024-04-25 | sunday school     | W   | 0.602      | -            | -                | -                | 1 (0.602) |     2.31 | CacaNito, jkaem, nawwk, sense, STYKO |
|           37 |     2356 | 2024-04-18 | BetBoom           | L   | 0.554      | -            | -                | -                | -         |    -1.19 | CacaNito, jkaem, nawwk, sense, STYKO |
|           36 |     2359 | 2024-04-18 | DMS               | W   | 0.553      | 0.143        | -                | 0.461 (0.036)    | 0 (0.000) |     5.68 | CacaNito, jkaem, nawwk, sense, STYKO |
|           35 |     2372 | 2024-04-18 | AMKAL             | W   | 0.553      | 0.143        | 0.111 (0.009)    | 0.515 (0.041)    | 0 (0.000) |    11.59 | CacaNito, jkaem, nawwk, sense, STYKO |
|           34 |     2536 | 2024-04-11 | Aurora            | L   | 0.506      | -            | -                | -                | -         |    -0.59 | CacaNito, jkaem, nawwk, sense, STYKO |
|           33 |     2575 | 2024-04-10 | AMKAL             | L   | 0.501      | -            | -                | -                | -         |    -5.82 | CacaNito, jkaem, nawwk, sense, STYKO |
|           32 |     2628 | 2024-04-09 | fnatic            | W   | 0.494      | 0.143        | 0.428 (0.030)    | 0.666 (0.047)    | -         |    15.02 | CacaNito, jkaem, nawwk, sense, STYKO |
|           31 |     2636 | 2024-04-09 | KOI               | W   | 0.493      | 0.143        | 0.076 (0.005)    | 0.404 (0.028)    | -         |    10.58 | CacaNito, jkaem, nawwk, sense, STYKO |
|           30 |     2657 | 2024-04-08 | fnatic            | L   | 0.487      | -            | -                | -                | -         |    -0.48 | CacaNito, jkaem, nawwk, sense, STYKO |
|           29 |     2673 | 2024-04-08 | GUN5              | W   | 0.485      | -            | -                | -                | -         |     0.63 | CacaNito, jkaem, nawwk, sense, STYKO |
|           28 |     2814 | 2024-04-03 | Monte             | L   | 0.452      | -            | -                | -                | -         |    -5.49 | CacaNito, jkaem, nawwk, sense, STYKO |
|           27 |     2843 | 2024-04-02 | Aurora            | L   | 0.447      | -            | -                | -                | -         |    -0.44 | CacaNito, jkaem, nawwk, sense, STYKO |
|           26 |     2850 | 2024-04-02 | B8                | W   | 0.446      | 0.143        | 0.206 (0.013)    | 0.933 (0.059)    | -         |     9.68 | CacaNito, jkaem, nawwk, sense, STYKO |
|           25 |     2876 | 2024-03-31 | B8                | L   | 0.432      | -            | -                | -                | -         |    -4.26 | CacaNito, jkaem, nawwk, sense, STYKO |
|           24 |     2908 | 2024-03-28 | 3DMAX             | L   | 0.413      | -            | -                | -                | -         |    -2.49 | CacaNito, jkaem, nawwk, sense, STYKO |
|           23 |     2973 | 2024-03-26 | FORZE             | L   | 0.399      | -            | -                | -                | -         |    -6.34 | CacaNito, jkaem, nawwk, sense, STYKO |
|           22 |     3074 | 2024-03-19 | Legacy            | L   | 0.352      | -            | -                | -                | -         |    -4.39 | CacaNito, jkaem, nawwk, sense, STYKO |
|           21 |     3086 | 2024-03-18 | Imperial          | L   | 0.345      | -            | -                | -                | -         |    -1.12 | CacaNito, jkaem, nawwk, sense, STYKO |
|           20 |     3103 | 2024-03-17 | AMKAL             | W   | 0.340      | 0.143        | 0.111 (0.005)    | 0.515 (0.025)    | 1 (0.340) |     7.03 | CacaNito, jkaem, nawwk, sense, STYKO |
|           19 |     3115 | 2024-03-17 | paiN              | L   | 0.339      | -            | -                | -                | -         |    -0.59 | CacaNito, jkaem, nawwk, sense, STYKO |
|           18 |     3245 | 2024-03-12 | Metizport         | L   | 0.306      | -            | -                | -                | -         |    -5.19 | CacaNito, jkaem, nawwk, sense, STYKO |
|           17 |     3254 | 2024-03-11 | Virtus.pro        | L   | 0.301      | -            | -                | -                | -         |    -0.10 | CacaNito, jkaem, nawwk, sense, STYKO |
|           16 |     3263 | 2024-03-11 | KOI               | W   | 0.300      | 0.143        | 0.076 (0.003)    | 0.404 (0.017)    | -         |     6.63 | CacaNito, jkaem, nawwk, sense, STYKO |
|           15 |     3357 | 2024-03-07 | Space             | W   | 0.273      | 0.500        | -                | 0.452 (0.062)    | -         |     2.80 | CacaNito, jkaem, nawwk, sense, STYKO |
|           14 |     3384 | 2024-03-06 | PARIVISION        | L   | 0.267      | -            | -                | -                | -         |    -3.41 | CacaNito, jkaem, nawwk, sense, STYKO |
|           13 |     3694 | 2024-02-21 | Gaimin Gladiators | W   | 0.172      | -            | -                | -                | 1 (0.172) |     3.20 | CacaNito, jkaem, nawwk, sense, STYKO |
|           12 |     3726 | 2024-02-20 | Monte             | W   | 0.165      | -            | -                | -                | 1 (0.165) |     3.30 | CacaNito, jkaem, nawwk, sense, STYKO |
|           11 |     3739 | 2024-02-19 | Cloud9            | L   | 0.160      | -            | -                | -                | -         |    -1.52 | CacaNito, jkaem, nawwk, sense, STYKO |
|           10 |     3750 | 2024-02-19 | OG                | W   | 0.158      | 0.143        | 0.170 (0.004)    | -                | 1 (0.158) |     3.09 | CacaNito, jkaem, nawwk, sense, STYKO |
|            9 |     3933 | 2024-02-11 | Metizport         | L   | 0.108      | -            | -                | -                | -         |    -1.85 | CacaNito, jkaem, nawwk, sense, STYKO |
|            8 |     3936 | 2024-02-11 | 3DMAX             | W   | 0.107      | 0.143        | 0.175 (0.003)    | 1.000 (0.015)    | -         |     2.77 | CacaNito, jkaem, nawwk, sense, STYKO |
|            7 |     3949 | 2024-02-10 | Metizport         | W   | 0.099      | -            | -                | -                | -         |     1.42 | CacaNito, jkaem, nawwk, sense, STYKO |
|            6 |     3952 | 2024-02-10 | ex-Anonymo        | W   | 0.099      | -            | -                | -                | -         |     0.13 | CacaNito, jkaem, nawwk, sense, STYKO |
|            5 |     4016 | 2024-02-04 | Natus Vincere     | L   | 0.060      | -            | -                | -                | -         |    -0.01 | CacaNito, jkaem, nawwk, sense, STYKO |
|            4 |     4041 | 2024-02-03 | Complexity        | L   | 0.054      | -            | -                | -                | -         |    -0.03 | CacaNito, jkaem, nawwk, sense, STYKO |
|            3 |     4069 | 2024-02-02 | BIG               | W   | 0.048      | -            | -                | -                | 1 (0.048) |     1.31 | CacaNito, jkaem, nawwk, sense, STYKO |
|            2 |     4104 | 2024-02-01 | FURIA             | W   | 0.041      | 0.143        | 0.355 (0.002)    | -                | 1 (0.041) |     1.27 | CacaNito, jkaem, nawwk, sense, STYKO |
|            1 |     4129 | 2024-01-31 | Spirit            | L   | 0.033      | -            | -                | -                | -         |    -0.01 | CacaNito, jkaem, nawwk, sense, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,296.46)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $500.00        | $450.19         |
| 2024-04-28 |      0.618 | $10,000.00     | $6,178.09       |
| 2024-03-20 |      0.360 | $10,000.00     | $3,601.09       |
| 2024-02-11 |      0.107 | $10,000.00     | $1,067.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
