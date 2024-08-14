### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, Altekz, niko, valde, Zyphon<br />
Global Rank: [47](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [34]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1061.0<br />
<br />
Final Rank Value (1061.0) = Starting Rank Value (1028.2) + Head To Head Adjustments (32.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.443[<sup>1</sup>](#table2)
- Bounty Collected: 0.478[<sup>2</sup>](#table1)
- Opponent Network: 0.353[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.318<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1028.2
- 400 + ( ( 0.318 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1028.2


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
|           35 |        6 | 2024-08-14 | ALTERNATE aTTaX  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.96 | acoR, Altekz, niko, valde, Zyphon |
|           34 |       82 | 2024-08-12 | Aurora           | W   | 1.000      | 0.500        | 0.387 (0.193)    | 0.737 (0.368)    | 0 (0.000) |    26.78 | acoR, Altekz, niko, valde, Zyphon |
|           33 |       94 | 2024-08-12 | Johnny Speeds    | W   | 1.000      | 0.333        | 0.122 (0.041)    | 1.000 (0.333)    | 0 (0.000) |    23.55 | acoR, Altekz, niko, valde, Zyphon |
|           32 |      115 | 2024-08-11 | kONO             | L   | 1.000      | -            | -                | -                | -         |   -21.33 | acoR, Altekz, niko, valde, Zyphon |
|           31 |      121 | 2024-08-11 | Enterprise       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.55 | acoR, Altekz, niko, valde, Zyphon |
|           30 |      122 | 2024-08-11 | Illuminar        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.69 | acoR, Altekz, niko, valde, Zyphon |
|           29 |      143 | 2024-08-10 | Into the Breach  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.61 | acoR, Altekz, niko, valde, Zyphon |
|           28 |      166 | 2024-08-09 | Revenant         | L   | 1.000      | -            | -                | -                | -         |   -20.72 | acoR, Altekz, niko, valde, Zyphon |
|           27 |      173 | 2024-08-09 | Permitta         | W   | 1.000      | 0.333        | -                | 0.957 (0.319)    | 0 (0.000) |    11.47 | acoR, Altekz, niko, valde, Zyphon |
|           26 |      188 | 2024-08-08 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -7.64 | acoR, Altekz, niko, valde, Zyphon |
|           25 |      231 | 2024-08-07 | Metizport        | L   | 1.000      | -            | -                | -                | -         |   -22.04 | acoR, Altekz, niko, valde, Zyphon |
|           24 |      252 | 2024-08-07 | Enterprise       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.59 | acoR, Altekz, niko, valde, Zyphon |
|           23 |      275 | 2024-08-06 | Betera           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.16 | acoR, Altekz, niko, valde, Zyphon |
|           22 |      293 | 2024-08-06 | ECSTATIC         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.79 | acoR, Altekz, niko, valde, Zyphon |
|           21 |      307 | 2024-08-05 | Sashi            | W   | 1.000      | 0.143        | 0.183 (0.026)    | -                | -         |    21.27 | acoR, Altekz, niko, valde, Zyphon |
|           20 |      309 | 2024-08-05 | 777              | W   | 1.000      | -            | -                | -                | -         |     4.04 | acoR, Altekz, niko, valde, Zyphon |
|           19 |      332 | 2024-08-04 | 1WIN             | L   | 1.000      | -            | -                | -                | -         |   -15.91 | acoR, Altekz, niko, valde, Zyphon |
|           18 |      339 | 2024-08-04 | TALON            | W   | 1.000      | -            | -                | -                | -         |     2.24 | acoR, Altekz, niko, valde, Zyphon |
|           17 |      395 | 2024-08-02 | PARIVISION       | L   | 1.000      | -            | -                | -                | -         |   -11.32 | acoR, Altekz, niko, valde, Zyphon |
|           16 |      528 | 2024-07-30 | 9 Pandas         | W   | 1.000      | 0.500        | 0.075 (0.037)    | 0.717 (0.358)    | -         |    17.65 | acoR, Altekz, niko, valde, Zyphon |
|           15 |      584 | 2024-07-29 | GUN5             | L   | 1.000      | -            | -                | -                | -         |   -21.95 | acoR, Altekz, niko, valde, Zyphon |
|           14 |      612 | 2024-07-28 | 1WIN             | L   | 1.000      | -            | -                | -                | -         |   -17.72 | acoR, Altekz, niko, valde, Zyphon |
|           13 |      784 | 2024-07-22 | CPH Wolves       | L   | 1.000      | -            | -                | -                | -         |   -24.30 | acoR, Altekz, niko, valde, Zyphon |
|           12 |      828 | 2024-07-21 | Preasy           | W   | 1.000      | -            | -                | -                | -         |     5.34 | acoR, Altekz, niko, valde, Zyphon |
|           11 |      932 | 2024-07-18 | Nexus            | L   | 1.000      | -            | -                | -                | -         |   -27.05 | acoR, Altekz, niko, valde, Zyphon |
|           10 |      956 | 2024-07-18 | LEON             | W   | 1.000      | -            | -                | -                | -         |     2.60 | acoR, Altekz, niko, valde, Zyphon |
|            9 |      999 | 2024-07-17 | GUN5             | W   | 1.000      | 0.500        | 0.067 (0.034)    | 0.528 (0.264)    | -         |     9.23 | acoR, Altekz, niko, valde, Zyphon |
|            8 |     1026 | 2024-07-17 | Into the Breach  | L   | 1.000      | -            | -                | -                | -         |   -26.61 | acoR, Altekz, niko, valde, Zyphon |
|            7 |     1073 | 2024-07-16 | 500              | W   | 1.000      | -            | -                | -                | -         |     0.63 | acoR, Altekz, niko, valde, Zyphon |
|            6 |     1106 | 2024-07-15 | 3DMAX            | W   | 1.000      | 0.500        | 0.508 (0.254)    | 1.000 (0.500)    | -         |    25.58 | acoR, Altekz, niko, valde, Zyphon |
|            5 |     1152 | 2024-07-13 | Sashi            | W   | 0.985      | 0.358        | 0.183 (0.064)    | 1.000 (0.353)    | -         |    19.57 | acoR, Altekz, niko, valde, Zyphon |
|            4 |     1164 | 2024-07-12 | Johnny Speeds    | W   | 0.977      | 0.358        | 0.122 (0.043)    | 1.000 (0.350)    | -         |    22.12 | acoR, Altekz, niko, valde, Zyphon |
|            3 |     1224 | 2024-07-09 | Passion UA       | W   | 0.958      | 0.358        | 0.168 (0.058)    | 1.000 (0.343)    | -         |    15.64 | acoR, Altekz, niko, valde, Zyphon |
|            2 |     1243 | 2024-07-08 | FLuffy Gangsters | L   | 0.952      | -            | -                | -                | -         |   -26.92 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     1247 | 2024-07-08 | Passion UA       | W   | 0.951      | 0.358        | 0.168 (0.057)    | 1.000 (0.340)    | -         |    15.24 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,674.73)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-12 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-07-13 |      0.985 | $12,864.00     | $12,674.73      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
