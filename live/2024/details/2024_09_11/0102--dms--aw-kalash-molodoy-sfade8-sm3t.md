### Roster Details<br />
Team Name: DMS<br />
Roster: AW, kAlash, molodoy, sFade8, sm3t<br />
Global Rank: [102](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [73]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  821.2<br />
<br />
Final Rank Value (821.2) = Starting Rank Value (867.5) + Head To Head Adjustments (-46.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.209[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 867.5
- 400 + ( ( 0.241 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 867.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |       12 | 2024-09-11 | RUBY             | W   | 1.000      | 0.143        | 0.073 (0.010)    | -                | 0 (0.000) |    16.40 | AW, kAlash, molodoy, sFade8, sm3t |
|           58 |      111 | 2024-09-07 | Revenant         | L   | 1.000      | -            | -                | -                | -         |   -11.18 | AW, kAlash, molodoy, sFade8, sm3t |
|           57 |      325 | 2024-08-30 | EYEBALLERS       | L   | 1.000      | -            | -                | -                | -         |   -18.34 | AW, kAlash, sFade8, sm3t, woozzzi |
|           56 |      357 | 2024-08-29 | CYBERSHOKE       | L   | 1.000      | -            | -                | -                | -         |    -9.23 | AW, kAlash, molodoy, sFade8, sm3t |
|           55 |      398 | 2024-08-28 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -10.26 | AW, kAlash, sFade8, sm3t, woozzzi |
|           54 |      429 | 2024-08-28 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |    -4.73 | AW, h1te, kAlash, sFade8, sm3t    |
|           53 |      568 | 2024-08-26 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |    -5.52 | AW, h1te, kAlash, sFade8, sm3t    |
|           52 |      740 | 2024-08-21 | Revenant         | L   | 1.000      | -            | -                | -                | -         |   -12.73 | AW, h1te, kAlash, sFade8, sm3t    |
|           51 |      812 | 2024-08-19 | Space            | W   | 1.000      | 0.435        | -                | 0.478 (0.208)    | 0 (0.000) |    10.76 | AW, h1te, kAlash, sFade8, sm3t    |
|           50 |      864 | 2024-08-17 | EYEBALLERS       | W   | 1.000      | 0.435        | -                | 0.543 (0.236)    | 0 (0.000) |    11.47 | AW, h1te, kAlash, sFade8, sm3t    |
|           49 |      877 | 2024-08-16 | BetBoom          | L   | 1.000      | -            | -                | -                | -         |    -2.82 | AW, h1te, kAlash, sFade8, sm3t    |
|           48 |      912 | 2024-08-15 | ALTERNATE aTTaX  | L   | 1.000      | -            | -                | -                | -         |   -17.15 | AW, h1te, kAlash, sFade8, sm3t    |
|           47 |      962 | 2024-08-13 | Illuminar        | W   | 1.000      | 0.435        | -                | 0.371 (0.161)    | 0 (0.000) |    14.16 | AW, h1te, kAlash, sFade8, sm3t    |
|           46 |      968 | 2024-08-13 | Endpoint         | L   | 1.000      | -            | -                | -                | -         |   -10.78 | AW, h1te, kAlash, sFade8, sm3t    |
|           45 |     1012 | 2024-08-12 | EYEBALLERS       | L   | 1.000      | -            | -                | -                | -         |   -19.12 | AW, h1te, kAlash, sFade8, sm3t    |
|           44 |     1069 | 2024-08-10 | FLuffy Gangsters | W   | 0.985      | 0.435        | -                | 0.384 (0.165)    | 0 (0.000) |     6.65 | AW, h1te, kAlash, sFade8, sm3t    |
|           43 |     1169 | 2024-08-07 | Monte Gen        | W   | 0.965      | 0.435        | 0.017 (0.007)    | 0.410 (0.172)    | 0 (0.000) |    14.41 | AW, h1te, kAlash, sFade8, sm3t    |
|           42 |     1208 | 2024-08-06 | Endpoint         | L   | 0.959      | -            | -                | -                | -         |   -13.89 | AW, h1te, kAlash, sFade8, sm3t    |
|           41 |     1595 | 2024-07-26 | AMKAL            | L   | 0.885      | -            | -                | -                | -         |    -5.28 | AW, h1te, kAlash, sFade8, sm3t    |
|           40 |     1597 | 2024-07-26 | Revenant         | W   | 0.884      | 0.650        | 0.043 (0.025)    | 0.652 (0.375)    | 1 (0.884) |    15.21 | AW, h1te, kAlash, sFade8, sm3t    |
|           39 |     1635 | 2024-07-25 | 3DMAX            | L   | 0.877      | -            | -                | -                | -         |    -0.92 | AW, h1te, kAlash, sFade8, sm3t    |
|           38 |     1661 | 2024-07-24 | Eternal Fire     | L   | 0.872      | -            | -                | -                | -         |    -0.16 | AW, h1te, kAlash, sFade8, sm3t    |
|           37 |     1804 | 2024-07-19 | SINNERS          | L   | 0.841      | -            | -                | -                | -         |    -8.27 | AW, h1te, kAlash, sFade8, sm3t    |
|           36 |     1853 | 2024-07-18 | Space            | L   | 0.834      | -            | -                | -                | -         |   -13.90 | AW, h1te, kAlash, sFade8, sm3t    |
|           35 |     1986 | 2024-07-16 | ALTERNATE aTTaX  | W   | 0.821      | 0.435        | 0.103 (0.037)    | 0.812 (0.290)    | 0 (0.000) |    14.01 | AW, h1te, kAlash, sFade8, sm3t    |
|           34 |     2388 | 2024-06-12 | Verdant          | L   | 0.594      | -            | -                | -                | -         |   -10.53 | AW, h1te, kAlash, sFade8, sm3t    |
|           33 |     2413 | 2024-06-11 | Zero Tenacity    | L   | 0.587      | -            | -                | -                | -         |    -5.23 | AW, h1te, kAlash, sFade8, sm3t    |
|           32 |     2591 | 2024-06-07 | Zero Tenacity    | L   | 0.561      | -            | -                | -                | -         |    -5.08 | AW, h1te, kAlash, sFade8, sm3t    |
|           31 |     2692 | 2024-06-06 | CYBERSHOKE       | L   | 0.552      | -            | -                | -                | -         |    -8.55 | AW, h1te, kAlash, sFade8, sm3t    |
|           30 |     2792 | 2024-06-04 | Sampi            | L   | 0.538      | -            | -                | -                | -         |    -8.83 | AW, h1te, kAlash, sFade8, sm3t    |
|           29 |     2808 | 2024-06-03 | ARCRED           | L   | 0.533      | -            | -                | -                | -         |    -8.87 | AW, h1te, kAlash, sFade8, sm3t    |
|           28 |     2819 | 2024-06-02 | Zero Tenacity    | L   | 0.527      | -            | -                | -                | -         |    -4.82 | AW, h1te, kAlash, sFade8, sm3t    |
|           27 |     2829 | 2024-06-02 | fnatic           | W   | 0.526      | 0.143        | 0.294 (0.022)    | -                | 0 (0.000) |    15.21 | AW, h1te, kAlash, sFade8, sm3t    |
|           26 |     2852 | 2024-06-01 | ENCE             | W   | 0.520      | 0.143        | 0.129 (0.010)    | -                | 0 (0.000) |    13.64 | AW, h1te, kAlash, sFade8, sm3t    |
|           25 |     2862 | 2024-06-01 | Zero Tenacity    | L   | 0.519      | -            | -                | -                | -         |    -4.43 | AW, h1te, kAlash, sFade8, sm3t    |
|           24 |     2867 | 2024-06-01 | ENCE             | W   | 0.519      | 0.143        | 0.129 (0.010)    | -                | -         |    13.84 | AW, h1te, kAlash, sFade8, sm3t    |
|           23 |     2884 | 2024-05-31 | Spirit Academy   | W   | 0.514      | -            | -                | -                | -         |     6.05 | AW, h1te, kAlash, sFade8, sm3t    |
|           22 |     2920 | 2024-05-30 | Nemiga           | W   | 0.506      | 0.372        | 0.300 (0.057)    | -                | -         |    13.10 | AW, h1te, kAlash, sFade8, sm3t    |
|           21 |     2939 | 2024-05-29 | Verdant          | W   | 0.501      | -            | -                | -                | -         |     7.60 | AW, h1te, kAlash, sFade8, sm3t    |
|           20 |     3010 | 2024-05-26 | GUN5             | L   | 0.478      | -            | -                | -                | -         |    -5.52 | AW, h1te, kAlash, sFade8, sm3t    |
|           19 |     3039 | 2024-05-24 | VP.Prodigy       | L   | 0.467      | -            | -                | -                | -         |    -8.19 | AW, h1te, kAlash, sFade8, sm3t    |
|           18 |     3048 | 2024-05-24 | BetBoom          | L   | 0.465      | -            | -                | -                | -         |    -1.84 | AW, h1te, kAlash, sFade8, sm3t    |
|           17 |     3058 | 2024-05-23 | B8               | L   | 0.459      | -            | -                | -                | -         |    -3.15 | AW, h1te, kAlash, sFade8, sm3t    |
|           16 |     3138 | 2024-05-21 | EYEBALLERS       | W   | 0.447      | -            | -                | -                | -         |     4.67 | AW, h1te, kAlash, sFade8, sm3t    |
|           15 |     3141 | 2024-05-21 | MOUZ NXT         | W   | 0.446      | 0.435        | 0.110 (0.021)    | 0.812 (0.157)    | -         |     9.25 | AW, h1te, kAlash, sFade8, sm3t    |
|           14 |     3196 | 2024-05-19 | Space            | L   | 0.434      | -            | -                | -                | -         |    -7.93 | AW, h1te, kAlash, sFade8, sm3t    |
|           13 |     3228 | 2024-05-18 | 777              | W   | 0.426      | -            | -                | -                | -         |     3.35 | AW, h1te, kAlash, sFade8, sm3t    |
|           12 |     3233 | 2024-05-18 | Sampi            | W   | 0.426      | 0.435        | -                | 1.000 (0.185)    | -         |     7.40 | AW, h1te, kAlash, sFade8, sm3t    |
|           11 |     3277 | 2024-05-17 | MOUZ NXT         | L   | 0.418      | -            | -                | -                | -         |    -4.45 | AW, h1te, kAlash, sFade8, sm3t    |
|           10 |     3297 | 2024-05-16 | B8               | L   | 0.414      | -            | -                | -                | -         |    -3.02 | AW, h1te, kAlash, sFade8, sm3t    |
|            9 |     3349 | 2024-05-15 | Monte            | L   | 0.407      | -            | -                | -                | -         |    -5.14 | AW, h1te, kAlash, sFade8, sm3t    |
|            8 |     3409 | 2024-05-14 | Rare Atom        | W   | 0.400      | -            | -                | -                | -         |     5.81 | AW, h1te, kAlash, sFade8, sm3t    |
|            7 |     3420 | 2024-05-14 | Sangal           | W   | 0.398      | 0.435        | 0.289 (0.050)    | 0.847 (0.146)    | -         |    11.44 | AW, h1te, kAlash, sFade8, sm3t    |
|            6 |     3436 | 2024-05-13 | Heimo            | W   | 0.393      | -            | -                | -                | -         |     2.96 | AW, h1te, kAlash, sFade8, sm3t    |
|            5 |     3489 | 2024-05-11 | CYBERSHOKE       | W   | 0.380      | -            | -                | -                | -         |     7.49 | AW, h1te, kAlash, sFade8, sm3t    |
|            4 |     3754 | 2024-04-28 | Alliance         | L   | 0.293      | -            | -                | -                | -         |    -5.01 | AW, h1te, kAlash, sFade8, sm3t    |
|            3 |     3805 | 2024-04-26 | BLEED            | L   | 0.279      | -            | -                | -                | -         |    -4.03 | AW, h1te, kAlash, sFade8, sm3t    |
|            2 |     4010 | 2024-04-18 | Apeks            | L   | 0.227      | -            | -                | -                | -         |    -4.56 | AW, h1te, kAlash, sFade8, sm3t    |
|            1 |     4019 | 2024-04-18 | EYEBALLERS       | W   | 0.226      | -            | -                | -                | -         |     2.29 | AW, h1te, kAlash, sFade8, sm3t    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($726.35)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
