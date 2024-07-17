### Roster Details<br />
Team Name: CYBERSHOKE<br />
Roster: FenomeN, levantino, lov1kus, notineki, sstiNiX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [106](../standings_global.md)<br />
Regional Rank: [76]( ../standings_europe.md)<br />
Final Rank Value:  888.7<br />
<br />
Final Rank Value (888.7) = Starting Rank Value (858.3) + Head To Head Adjustments (30.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.449[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.109[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.213<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 858.3
- 400 + ( ( 0.213 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 858.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |       55 | 2024-07-16 | fnatic           | L   | 1.000      | -            | -                | -                | -         |    -1.05 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           17 |      314 | 2024-06-16 | Revenant         | W   | 0.994      | 0.143        | 0.037 (0.005)    | 0.287 (0.041)    | 0 (0.000) |    13.96 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           16 |      437 | 2024-06-13 | ARCRED           | L   | 0.972      | -            | -                | -                | -         |   -11.72 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           15 |      458 | 2024-06-12 | LEON             | W   | 0.967      | 0.143        | 0.010 (0.001)    | 0.160 (0.022)    | 0 (0.000) |     9.09 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           14 |      482 | 2024-06-11 | Preasy           | W   | 0.959      | 0.143        | 0.013 (0.002)    | 0.171 (0.023)    | 0 (0.000) |    12.45 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           13 |      502 | 2024-06-10 | Rhyno            | L   | 0.953      | -            | -                | -                | -         |    -7.56 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           12 |      545 | 2024-06-09 | EYEBALLERS       | W   | 0.947      | 0.500        | 0.009 (0.004)    | 0.619 (0.293)    | 0 (0.000) |    18.49 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           11 |      634 | 2024-06-08 | Sampi            | W   | 0.938      | 0.500        | 0.045 (0.021)    | 0.975 (0.457)    | 0 (0.000) |    19.24 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           10 |      691 | 2024-06-07 | Illuminar        | L   | 0.931      | -            | -                | -                | -         |   -14.46 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            9 |      753 | 2024-06-06 | DMS              | W   | 0.925      | 0.500        | 0.005 (0.002)    | 0.494 (0.229)    | 0 (0.000) |    19.98 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            8 |      789 | 2024-06-05 | GUN5             | L   | 0.921      | -            | -                | -                | -         |    -7.07 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            7 |      835 | 2024-06-04 | Zero Tenacity    | L   | 0.914      | -            | -                | -                | -         |    -4.07 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            6 |      841 | 2024-06-04 | Nemiga           | L   | 0.913      | -            | -                | -                | -         |    -3.44 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            5 |      867 | 2024-06-03 | Grannys Knockers | L   | 0.907      | -            | -                | -                | -         |   -14.32 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            4 |      910 | 2024-06-01 | EXO              | W   | 0.894      | 0.143        | 0.019 (0.002)    | 0.132 (0.017)    | 0 (0.000) |    11.92 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            3 |      956 | 2024-05-31 | HOTU             | W   | 0.886      | 0.372        | 0.010 (0.003)    | 0.036 (0.012)    | 0 (0.000) |     8.71 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            2 |     1019 | 2024-05-28 | VP.Prodigy       | L   | 0.868      | -            | -                | -                | -         |    -9.26 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            1 |     1550 | 2024-05-11 | DMS              | L   | 0.753      | -            | -                | -                | -         |   -10.51 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,481.32)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $2,500.00      | $2,482.63       |
| 2024-06-11 |      0.960 | $12,500.00     | $11,998.69      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
