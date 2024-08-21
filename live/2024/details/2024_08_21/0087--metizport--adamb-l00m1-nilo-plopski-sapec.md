### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, Sapec<br />
Global Rank: [87](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [62]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  897.0<br />
<br />
Final Rank Value (897.0) = Starting Rank Value (807.7) + Head To Head Adjustments (89.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.174[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.7
- 400 + ( ( 0.205 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 807.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |       36 | 2024-08-21 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -13.95 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |       85 | 2024-08-20 | TSM               | L   | 1.000      | -            | -                | -                | -         |    -9.45 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |      102 | 2024-08-19 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -7.40 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |      218 | 2024-08-15 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |    -7.55 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |      319 | 2024-08-12 | Sampi             | W   | 1.000      | 0.384        | 0.022 (0.009)    | 0.889 (0.342)    | 0 (0.000) |    12.99 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |      420 | 2024-08-08 | Into the Breach   | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.53 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |      449 | 2024-08-07 | Johnny Speeds     | W   | 1.000      | 0.143        | 0.120 (0.017)    | 1.000 (0.143)    | 0 (0.000) |    27.18 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |      458 | 2024-08-07 | TSM               | W   | 1.000      | 0.143        | 0.055 (0.008)    | 0.715 (0.102)    | 0 (0.000) |    22.07 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |      505 | 2024-08-06 | BLEED             | W   | 1.000      | 0.143        | 0.113 (0.016)    | 0.544 (0.078)    | 0 (0.000) |    28.19 | adamb, Jackinho, nilo, Plopski, Sapec |
|           17 |      509 | 2024-08-06 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.11 | adamb, Jackinho, nilo, Plopski, Sapec |
|           16 |      514 | 2024-08-06 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -3.17 | adamb, Jackinho, nilo, Plopski, Sapec |
|           15 |      670 | 2024-08-01 | ALTERNATE aTTaX   | W   | 1.000      | 0.143        | 0.035 (0.005)    | 0.565 (0.081)    | 0 (0.000) |    17.65 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |      680 | 2024-08-01 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -10.97 | adamb, Jackinho, nilo, Plopski, Sapec |
|           13 |      777 | 2024-07-30 | QUAZAR            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.42 | adamb, Jackinho, nilo, Plopski, Sapec |
|           12 |      832 | 2024-07-28 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -10.97 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |      998 | 2024-07-23 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -13.32 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     1016 | 2024-07-22 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -12.31 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     1117 | 2024-07-19 | Sampi             | W   | 0.979      | 0.435        | 0.022 (0.010)    | 0.889 (0.378)    | 0 (0.000) |    16.89 | adamb, Jackinho, nilo, Plopski, Sapec |
|            8 |     1173 | 2024-07-18 | BC.Game           | L   | 0.972      | -            | -                | -                | -         |   -13.05 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     1296 | 2024-07-16 | Endpoint          | W   | 0.958      | 0.435        | 0.059 (0.025)    | 0.605 (0.252)    | 0 (0.000) |    18.53 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     2360 | 2024-05-23 | Space             | L   | 0.597      | -            | -                | -                | -         |    -9.39 | abdi, adamb, Jackinho, nilo, Plopski  |
|            5 |     2465 | 2024-05-20 | Zero Tenacity     | L   | 0.580      | -            | -                | -                | -         |    -4.19 | adamb, Jackinho, nilo, Plopski, ztr   |
|            4 |     2519 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.566      | 0.500        | 0.230 (0.065)    | 0.476 (0.135)    | -         |    17.38 | adamb, Jackinho, nilo, Plopski, ztr   |
|            3 |     2606 | 2024-05-16 | Rare Atom         | W   | 0.551      | 0.500        | 0.025 (0.007)    | 0.407 (0.112)    | -         |     9.97 | adamb, Jackinho, nilo, Plopski, ztr   |
|            2 |     2790 | 2024-05-11 | BetBoom           | L   | 0.518      | -            | -                | -                | -         |    -0.94 | adamb, Jackinho, nilo, Plopski, ztr   |
|            1 |     2805 | 2024-05-10 | EYEBALLERS        | W   | 0.512      | 0.435        | 0.005 (0.001)    | 0.550 (0.122)    | -         |    10.07 | adamb, Jackinho, nilo, Plopski, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,052.38)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
