### Roster Details<br />
Team Name: JANO<br />
Roster: Aerial, allu, HENU, juho, xseveN<br />
Global Rank: [72](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [50]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  977.2<br />
<br />
Final Rank Value (977.2) = Starting Rank Value (988.2) + Head To Head Adjustments (-11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.362[<sup>2</sup>](#table1)

The average of these factors is 0.297<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 988.2
- 400 + ( ( 0.297 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 988.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      177 | 2024-10-20 | ENCE Academy      | W   | 1.000      | 0.303        | 0.017 (0.005)    | 0.257 (0.078)    | 1 (1.000) |     8.82 | Aerial, allu, HENU, juho, xseveN |
|           12 |      229 | 2024-10-18 | B8                | L   | 1.000      | -            | -                | -                | -         |    -4.23 | Aerial, allu, HENU, juho, xseveN |
|           11 |      276 | 2024-10-16 | Ninjas in Pyjamas | W   | 1.000      | 0.589        | 0.156 (0.092)    | 0.225 (0.133)    | 1 (1.000) |    23.95 | Aerial, allu, HENU, juho, xseveN |
|           10 |      292 | 2024-10-16 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -0.43 | Aerial, allu, HENU, juho, xseveN |
|            9 |      484 | 2024-10-06 | Heimo             | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.156 (0.022)    | 0 (0.000) |     5.04 | Aerial, allu, HENU, juho, xseveN |
|            8 |      492 | 2024-10-06 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -22.30 | Aerial, allu, HENU, juho, xseveN |
|            7 |      527 | 2024-10-05 | cspojat           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.27 | Aerial, allu, HENU, juho, xseveN |
|            6 |     1430 | 2024-09-08 | Aurora Young Blud | L   | 0.852      | -            | -                | -                | -         |   -15.80 | Aerial, allu, HENU, juho, xseveN |
|            5 |     1481 | 2024-09-06 | Revenant          | L   | 0.840      | -            | -                | -                | -         |   -14.96 | Aerial, allu, HENU, juho, xseveN |
|            4 |     1571 | 2024-09-04 | Rhyno             | W   | 0.825      | 0.435        | 0.041 (0.015)    | 0.431 (0.155)    | 0 (0.000) |    10.63 | Aerial, allu, HENU, juho, xseveN |
|            3 |     1607 | 2024-09-03 | GUN5              | L   | 0.818      | -            | -                | -                | -         |   -10.39 | Aerial, allu, HENU, juho, xseveN |
|            2 |     2660 | 2024-08-03 | ENCE Academy      | W   | 0.612      | 0.143        | 0.017 (0.002)    | 0.257 (0.022)    | 1 (0.612) |     4.92 | Aerial, allu, HENU, juho, xseveN |
|            1 |     2722 | 2024-08-01 | Heimo             | W   | 0.600      | 0.143        | 0.002 (0.000)    | 0.156 (0.013)    | 1 (0.600) |     2.45 | Aerial, allu, HENU, juho, xseveN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,320.00)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-20 |      1.000 | $3,320.00      | $3,320.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
