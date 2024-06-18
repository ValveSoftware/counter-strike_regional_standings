### Roster Details<br />
Team Name: CYBERSHOKE<br />
Roster: FenomeN, kelieN, lov1kus, notineki, sstiNiX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [105](../standings_global.md)<br />
Regional Rank: [75]( ../standings_europe.md)<br />
Final Rank Value:  855.4<br />
<br />
Final Rank Value (855.4) = Starting Rank Value (822.9) + Head To Head Adjustments (32.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.434[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.107[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 822.9
- 400 + ( ( 0.208 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 822.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |       14 | 2024-06-16 | Revenant         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.071 (0.010)    | 0 (0.000) |     4.93 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           16 |      137 | 2024-06-13 | ARCRED           | L   | 1.000      | -            | -                | -                | -         |   -11.73 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           15 |      158 | 2024-06-12 | LEON             | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.165 (0.024)    | 0 (0.000) |     9.58 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           14 |      182 | 2024-06-11 | Preasy           | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.169 (0.024)    | 0 (0.000) |    13.23 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           13 |      202 | 2024-06-10 | Rhyno            | L   | 1.000      | -            | -                | -                | -         |    -7.31 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           12 |      245 | 2024-06-09 | EYEBALLERS       | W   | 1.000      | 0.500        | 0.006 (0.003)    | 0.653 (0.327)    | 0 (0.000) |    20.49 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           11 |      334 | 2024-06-08 | Sampi            | W   | 1.000      | 0.500        | 0.045 (0.023)    | 0.837 (0.418)    | 0 (0.000) |    21.59 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           10 |      391 | 2024-06-07 | Illuminar        | L   | 1.000      | -            | -                | -                | -         |   -16.34 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            9 |      453 | 2024-06-06 | DMS              | W   | 1.000      | 0.500        | 0.004 (0.002)    | 0.473 (0.236)    | 0 (0.000) |    22.83 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            8 |      489 | 2024-06-05 | GUN5             | L   | 1.000      | -            | -                | -                | -         |    -6.95 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            7 |      535 | 2024-06-04 | Zero Tenacity    | L   | 1.000      | -            | -                | -                | -         |    -3.67 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            6 |      541 | 2024-06-04 | Nemiga           | L   | 1.000      | -            | -                | -                | -         |    -3.22 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            5 |      567 | 2024-06-03 | Grannys Knockers | L   | 1.000      | -            | -                | -                | -         |   -14.99 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            4 |      612 | 2024-06-01 | EXO              | W   | 1.000      | 0.143        | 0.020 (0.003)    | 0.137 (0.020)    | 0 (0.000) |    15.27 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            3 |      658 | 2024-05-31 | HOTU             | W   | 1.000      | 0.372        | 0.008 (0.003)    | 0.036 (0.013)    | 0 (0.000) |    10.34 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            2 |      721 | 2024-05-28 | VP.Prodigy       | L   | 1.000      | -            | -                | -                | -         |    -9.23 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            1 |     1252 | 2024-05-11 | DMS              | L   | 0.949      | -            | -                | -                | -         |   -12.24 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,000.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-11 |      1.000 | $12,500.00     | $12,500.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
