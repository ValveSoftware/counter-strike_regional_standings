### Roster Details<br />
Team Name: G2<br />
Roster: huNter-, m0NESY, malbsMd, NiKo, Snax<br />
Global Rank: [2](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1954.3<br />
<br />
Final Rank Value (1954.3) = Starting Rank Value (2000.0) + Head To Head Adjustments (-45.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.748[<sup>2</sup>](#table1)
- Opponent Network: 0.352[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.775<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.775 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 2000.0


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
|           42 |       19 | 2024-07-31 | Ninjas in Pyjamas | W   | 1.000      | 0.581        | -                | 0.477 (0.277)    | 1 (1.000) |     2.86 | huNter-, m0NESY, malbsMd, NiKo, Snax  |
|           41 |      329 | 2024-07-21 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -15.52 | huNter-, m0NESY, malbsMd, NiKo, Snax  |
|           40 |      374 | 2024-07-20 | Virtus.pro        | W   | 1.000      | 1.000        | 0.483 (0.483)    | 0.327 (0.327)    | 1 (1.000) |     6.22 | huNter-, m0NESY, malbsMd, NiKo, Snax  |
|           39 |      439 | 2024-07-18 | Spirit            | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.424 (0.424)    | 1 (1.000) |    15.25 | huNter-, m0NESY, malbsMd, NiKo, Snax  |
|           38 |      539 | 2024-07-17 | The MongolZ       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.719 (0.719)    | 1 (1.000) |     9.15 | huNter-, m0NESY, malbsMd, NiKo, Snax  |
|           37 |      956 | 2024-06-13 | Vitality          | L   | 0.879      | -            | -                | -                | -         |   -17.64 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           36 |     1409 | 2024-06-02 | Vitality          | W   | 0.807      | 0.624        | 0.592 (0.298)    | 0.385 (0.194)    | 1 (0.807) |     9.78 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           35 |     1433 | 2024-06-01 | 9z                | W   | 0.801      | 0.624        | 0.412 (0.206)    | 0.625 (0.312)    | 1 (0.801) |     1.86 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           34 |     1469 | 2024-05-31 | FaZe              | W   | 0.794      | 0.624        | 0.643 (0.319)    | 0.410 (0.203)    | 1 (0.794) |     6.87 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           33 |     1519 | 2024-05-29 | Liquid            | W   | 0.781      | 0.624        | -                | 0.430 (0.210)    | 1 (0.781) |     2.10 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           32 |     1543 | 2024-05-28 | MOUZ              | W   | 0.775      | 0.624        | 1.000 (0.484)    | -                | 1 (0.775) |    11.58 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           31 |     1567 | 2024-05-27 | Vitality          | L   | 0.767      | -            | -                | -                | -         |   -14.39 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           30 |     1578 | 2024-05-27 | Falcons           | W   | 0.766      | -            | -                | -                | 1 (0.766) |     1.50 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           29 |     2117 | 2024-05-09 | MOUZ              | L   | 0.646      | -            | -                | -                | -         |   -11.71 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           28 |     2143 | 2024-05-08 | 3DMAX             | W   | 0.639      | 0.889        | 0.504 (0.286)    | 1.000 (0.568)    | -         |     2.78 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           27 |     2162 | 2024-05-07 | BIG               | W   | 0.632      | -            | -                | -                | -         |     0.38 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           26 |     2338 | 2024-04-28 | M80               | W   | 0.573      | 0.889        | -                | 0.551 (0.281)    | -         |     0.39 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           25 |     2372 | 2024-04-27 | Falcons           | W   | 0.565      | -            | -                | -                | -         |     0.96 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           24 |     2393 | 2024-04-26 | M80               | L   | 0.558      | -            | -                | -                | -         |   -17.25 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           23 |     2425 | 2024-04-25 | The MongolZ       | L   | 0.551      | -            | -                | -                | -         |    -9.93 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           22 |     2445 | 2024-04-24 | TYLOO             | W   | 0.544      | -            | -                | -                | -         |     0.02 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           21 |     2745 | 2024-04-13 | MOUZ              | L   | 0.470      | -            | -                | -                | -         |    -9.23 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           20 |     2758 | 2024-04-12 | Virtus.pro        | W   | 0.463      | -            | -                | -                | -         |     2.70 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           19 |     2828 | 2024-04-10 | HEROIC            | W   | 0.451      | -            | -                | -                | -         |     1.45 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           18 |     2887 | 2024-04-09 | Lynn Vision       | W   | 0.445      | -            | -                | -                | -         |     0.06 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           17 |     2918 | 2024-04-08 | Liquid            | L   | 0.438      | -            | -                | -                | -         |   -13.10 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           16 |     2928 | 2024-04-07 | 9z                | W   | 0.436      | -            | -                | -                | -         |     1.21 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           15 |     3120 | 2024-03-30 | Natus Vincere     | L   | 0.381      | -            | -                | -                | -         |    -6.07 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           14 |     3127 | 2024-03-29 | MOUZ              | W   | 0.374      | 1.000        | 1.000 (0.374)    | -                | -         |     4.18 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           13 |     3224 | 2024-03-24 | Virtus.pro        | W   | 0.339      | 1.000        | 0.483 (0.164)    | -                | -         |     1.97 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           12 |     3236 | 2024-03-23 | Gaimin Gladiators | W   | 0.333      | -            | -                | -                | -         |     0.05 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           11 |     3255 | 2024-03-22 | Cloud9            | L   | 0.324      | -            | -                | -                | -         |   -10.15 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           10 |     3265 | 2024-03-21 | Natus Vincere     | L   | 0.320      | -            | -                | -                | -         |    -5.12 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            9 |     3275 | 2024-03-21 | FURIA             | W   | 0.319      | -            | -                | -                | -         |     1.85 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            8 |     4091 | 2024-02-15 | FaZe              | W   | 0.085      | -            | -                | -                | -         |     0.47 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            7 |     4122 | 2024-02-14 | Eternal Fire      | W   | 0.080      | -            | -                | -                | -         |     0.45 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            6 |     4138 | 2024-02-14 | Into the Breach   | W   | 0.078      | -            | -                | -                | -         |     0.00 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            5 |     4203 | 2024-02-09 | FaZe              | L   | 0.046      | -            | -                | -                | -         |    -1.19 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            4 |     4231 | 2024-02-06 | HEROIC            | W   | 0.026      | -            | -                | -                | -         |     0.07 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            3 |     4237 | 2024-02-06 | Monte             | W   | 0.025      | -            | -                | -                | -         |     0.00 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            2 |     4243 | 2024-02-05 | ENCE              | L   | 0.019      | -            | -                | -                | -         |    -0.57 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            1 |     4296 | 2024-02-03 | HEROIC            | W   | 0.005      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, m0NESY, nexa, NiKo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($328,832.91)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $175,000.00    | $175,000.00     |
| 2024-06-16 |      0.899 | $10,000.00     | $8,991.16       |
| 2024-06-02 |      0.807 | $100,000.00    | $80,687.98      |
| 2024-05-12 |      0.666 | $32,000.00     | $21,303.44      |
| 2024-04-14 |      0.478 | $20,000.00     | $9,552.19       |
| 2024-03-31 |      0.387 | $80,000.00     | $30,921.23      |
| 2024-02-11 |      0.059 | $40,000.00     | $2,376.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
