### Roster Details<br />
Team Name: CYBERSHOKE<br />
Roster: FenomeN, kelieN, lov1kus, notineki, sstiNiX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [99](../standings_global.md)<br />
Regional Rank: [71]( ../standings_europe.md)<br />
Final Rank Value:  887.0<br />
<br />
Final Rank Value (887.0) = Starting Rank Value (850.4) + Head To Head Adjustments (36.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 850.4
- 400 + ( ( 0.214 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 850.4


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
|           17 |      150 | 2024-06-16 | Revenant         | W   | 1.000      | 0.143        | 0.035 (0.005)    | 0.285 (0.041)    | 0 (0.000) |    13.42 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           16 |      273 | 2024-06-13 | ARCRED           | L   | 1.000      | -            | -                | -                | -         |   -12.12 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           15 |      294 | 2024-06-12 | LEON             | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.167 (0.024)    | 0 (0.000) |     9.26 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           14 |      318 | 2024-06-11 | Preasy           | W   | 0.999      | 0.143        | 0.012 (0.002)    | 0.176 (0.025)    | 0 (0.000) |    12.79 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           13 |      338 | 2024-06-10 | Rhyno            | L   | 0.993      | -            | -                | -                | -         |    -7.70 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           12 |      381 | 2024-06-09 | EYEBALLERS       | W   | 0.986      | 0.500        | 0.009 (0.004)    | 0.646 (0.319)    | 0 (0.000) |    19.46 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           11 |      470 | 2024-06-08 | Slovakia         | W   | 0.978      | 0.500        | 0.045 (0.022)    | 0.891 (0.436)    | 0 (0.000) |    20.00 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|           10 |      527 | 2024-06-07 | Illuminar        | L   | 0.971      | -            | -                | -                | -         |   -11.79 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            9 |      589 | 2024-06-06 | DMS              | W   | 0.965      | 0.500        | 0.005 (0.002)    | 0.471 (0.227)    | 0 (0.000) |    21.07 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            8 |      625 | 2024-06-05 | GUN5             | L   | 0.960      | -            | -                | -                | -         |    -7.14 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            7 |      671 | 2024-06-04 | Zero Tenacity    | L   | 0.954      | -            | -                | -                | -         |    -4.05 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            6 |      677 | 2024-06-04 | Nemiga           | L   | 0.953      | -            | -                | -                | -         |    -3.33 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            5 |      703 | 2024-06-03 | Grannys Knockers | L   | 0.947      | -            | -                | -                | -         |   -14.73 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            4 |      746 | 2024-06-01 | EXO              | W   | 0.934      | 0.143        | 0.019 (0.003)    | 0.139 (0.019)    | 0 (0.000) |    12.85 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            3 |      792 | 2024-05-31 | HOTU             | W   | 0.926      | 0.372        | 0.010 (0.003)    | 0.037 (0.013)    | 0 (0.000) |     9.16 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            2 |      855 | 2024-05-28 | VP.Prodigy       | L   | 0.908      | -            | -                | -                | -         |    -9.35 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |
|            1 |     1386 | 2024-05-11 | DMS              | L   | 0.793      | -            | -                | -                | -         |   -11.23 | FenomeN, kelieN, lov1kus, notineki, sstiNiX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,993.81)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-11 |      1.000 | $12,500.00     | $12,493.81      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
