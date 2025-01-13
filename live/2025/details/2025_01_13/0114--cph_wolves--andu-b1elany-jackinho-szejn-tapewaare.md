### Roster Details<br />
Team Name: CPH Wolves<br />
Roster: aNdu, b1elany, Jackinho, szejn, Tapewaare<br />
Global Rank: [114](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [84]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  833.0<br />
<br />
Final Rank Value (833.0) = Starting Rank Value (805.7) + Head To Head Adjustments (27.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 805.7
- 400 + ( ( 0.205 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 805.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |       36 | 2025-01-07 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -22.37 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|           17 |      197 | 2024-12-14 | FAVBET            | W   | 1.000      | 0.143        | 0.072 (0.010)    | 0.894 (0.128)    | 0 (0.000) |    19.69 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|           16 |      222 | 2024-12-13 | CYBERSHOKE        | W   | 0.995      | 0.143        | 0.018 (0.003)    | 0.633 (0.090)    | 0 (0.000) |    18.00 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|           15 |      322 | 2024-12-07 | 500               | L   | 0.955      | -            | -                | -                | -         |    -4.93 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|           14 |      409 | 2024-12-04 | L&G               | L   | 0.934      | -            | -                | -                | -         |   -11.25 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|           13 |      443 | 2024-12-02 | Spirit Academy    | W   | 0.921      | 0.372        | 0.166 (0.057)    | 0.942 (0.323)    | 0 (0.000) |    24.16 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|           12 |      492 | 2024-11-30 | FAVBET            | W   | 0.907      | 0.372        | 0.072 (0.024)    | 0.894 (0.302)    | 0 (0.000) |    20.21 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|           11 |      538 | 2024-11-28 | 1WIN              | W   | 0.894      | 0.372        | 0.009 (0.003)    | 0.075 (0.025)    | 0 (0.000) |    11.07 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|           10 |      599 | 2024-11-24 | NAVI Junior       | L   | 0.865      | -            | -                | -                | -         |    -3.61 | aNdu, MAGILA, mwlky, szejn, Tapewaare     |
|            9 |      948 | 2024-11-10 | L&G               | L   | 0.773      | -            | -                | -                | -         |    -9.53 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|            8 |     1147 | 2024-10-31 | Fire Flux         | L   | 0.706      | -            | -                | -                | -         |    -9.47 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|            7 |     1266 | 2024-10-25 | SovvyKiNG         | L   | 0.666      | -            | -                | -                | -         |   -15.77 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|            6 |     1304 | 2024-10-22 | Aurora Young Blud | L   | 0.645      | -            | -                | -                | -         |    -7.35 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|            5 |     1312 | 2024-10-21 | Viperio           | W   | 0.639      | 0.333        | 0.004 (0.001)    | 0.073 (0.016)    | 0 (0.000) |     6.02 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|            4 |     1338 | 2024-10-20 | kONO              | L   | 0.632      | -            | -                | -                | -         |    -7.26 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|            3 |     1386 | 2024-10-18 | Aurora Young Blud | W   | 0.620      | 0.384        | 0.045 (0.011)    | 0.841 (0.200)    | 0 (0.000) |    12.61 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|            2 |     1418 | 2024-10-17 | L&G               | W   | 0.612      | 0.333        | 0.057 (0.012)    | 0.562 (0.115)    | 0 (0.000) |    11.57 | aNdu, eraa, MAGILA, szejn, Tapewaare      |
|            1 |     1484 | 2024-10-13 | 9INE              | L   | 0.587      | -            | -                | -                | -         |    -4.49 | aNdu, eraa, MAGILA, szejn, Tapewaare      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,672.46)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-07 |      1.000 | $500.00        | $500.00         |
| 2024-12-08 |      0.961 | $3,300.00      | $3,172.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
