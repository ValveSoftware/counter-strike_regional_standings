### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [181](../standings_global.md)<br />
Regional Rank: [115]( ../standings_europe.md)<br />
Final Rank Value:  612.9<br />
<br />
Final Rank Value (612.9) = Starting Rank Value (579.9) + Head To Head Adjustments (33.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.084<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 579.9
- 400 + ( ( 0.084 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 579.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2859 | 2024-03-15 | MOUZ NXT        | L   | 0.373      | -            | -                | -                | -         |    -0.75 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           20 |     2896 | 2024-03-14 | ex-Preasy       | L   | 0.365      | -            | -                | -                | -         |    -1.93 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           19 |     2985 | 2024-03-11 | ECLOT           | W   | 0.345      | 0.371        | 0.103 (0.013)    | 0.551 (0.070)    | 0 (0.000) |    10.53 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           18 |     3002 | 2024-03-10 | ALTERNATE aTTaX | W   | 0.339      | 0.371        | 0.050 (0.006)    | 0.644 (0.081)    | 0 (0.000) |     9.91 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           17 |     3031 | 2024-03-09 | Alliance        | L   | 0.332      | -            | -                | -                | -         |    -1.50 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           16 |     3046 | 2024-03-08 | Passion UA      | L   | 0.326      | -            | -                | -                | -         |    -0.82 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           15 |     3147 | 2024-03-05 | 500             | L   | 0.306      | -            | -                | -                | -         |    -2.81 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           14 |     3164 | 2024-03-04 | Sashi           | W   | 0.299      | 0.371        | 0.215 (0.024)    | 1.000 (0.111)    | 0 (0.000) |     8.98 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           13 |     3293 | 2024-02-26 | 9INE            | W   | 0.253      | 0.143        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     3.19 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           12 |     3314 | 2024-02-25 | Secret          | W   | 0.246      | 0.358        | 0.000 (0.000)    | 0.085 (0.007)    | 0 (0.000) |     3.67 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           11 |     3364 | 2024-02-23 | Sampi           | L   | 0.232      | -            | -                | -                | -         |    -0.82 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           10 |     3409 | 2024-02-21 | MOUZ NXT        | L   | 0.219      | -            | -                | -                | -         |    -0.36 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            9 |     3496 | 2024-02-17 | The Chosen Few  | W   | 0.195      | 0.358        | 0.001 (0.000)    | 0.086 (0.006)    | 0 (0.000) |     4.05 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            8 |     3646 | 2024-02-11 | ALTERNATE aTTaX | L   | 0.154      | -            | -                | -                | -         |    -0.30 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            7 |     3719 | 2024-02-05 | Sashi           | L   | 0.112      | -            | -                | -                | -         |    -0.14 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            6 |     3762 | 2024-02-03 | Sangal          | W   | 0.100      | 0.358        | 0.232 (0.008)    | 0.893 (0.032)    | 0 (0.000) |     3.04 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            5 |     3869 | 2024-01-30 | Endpoint        | L   | 0.073      | -            | -                | -                | -         |    -0.29 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            4 |     3872 | 2024-01-30 | ex-Preasy       | L   | 0.072      | -            | -                | -                | -         |    -0.40 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            3 |     3919 | 2024-01-26 | ALTERNATE aTTaX | L   | 0.046      | -            | -                | -                | -         |    -0.09 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            2 |     4068 | 2024-01-20 | ex-sYnck        | L   | 0.006      | -            | -                | -                | -         |    -0.12 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            1 |     4110 | 2024-01-19 | EYEBALLERS      | W   | 0.001      | 0.143        | 0.009 (0.000)    | 0.619 (0.000)    | 0 (0.000) |     0.03 | c0llins, Marix, mwlky, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
