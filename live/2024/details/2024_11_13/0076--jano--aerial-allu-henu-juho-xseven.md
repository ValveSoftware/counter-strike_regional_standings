### Roster Details<br />
Team Name: JANO<br />
Roster: Aerial, allu, HENU, juho, xseveN<br />
Global Rank: [76](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [51]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  938.8<br />
<br />
Final Rank Value (938.8) = Starting Rank Value (945.2) + Head To Head Adjustments (-6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.344[<sup>2</sup>](#table1)

The average of these factors is 0.273<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 945.2
- 400 + ( ( 0.273 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 945.2


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
|           13 |      487 | 2024-10-20 | ENCE Academy      | W   | 1.000      | 0.303        | 0.009 (0.003)    | 0.239 (0.072)    | 1 (1.000) |     9.54 | Aerial, allu, HENU, juho, xseveN |
|           12 |      539 | 2024-10-18 | B8                | L   | 1.000      | -            | -                | -                | -         |    -4.65 | Aerial, allu, HENU, juho, xseveN |
|           11 |      586 | 2024-10-16 | Ninjas in Pyjamas | W   | 1.000      | 0.589        | 0.096 (0.056)    | 0.254 (0.149)    | 1 (1.000) |    23.50 | Aerial, allu, HENU, juho, xseveN |
|           10 |      602 | 2024-10-16 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -0.30 | Aerial, allu, HENU, juho, xseveN |
|            9 |      794 | 2024-10-06 | Heimo             | W   | 0.947      | 0.143        | 0.001 (0.000)    | 0.148 (0.020)    | 0 (0.000) |     5.60 | Aerial, allu, HENU, juho, xseveN |
|            8 |      802 | 2024-10-06 | ENCE Academy      | L   | 0.946      | -            | -                | -                | -         |   -20.35 | Aerial, allu, HENU, juho, xseveN |
|            7 |      837 | 2024-10-05 | cspojat           | W   | 0.939      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.48 | Aerial, allu, HENU, juho, xseveN |
|            6 |     1740 | 2024-09-08 | Aurora Young Blud | L   | 0.759      | -            | -                | -                | -         |   -13.93 | Aerial, allu, HENU, juho, xseveN |
|            5 |     1791 | 2024-09-06 | Revenant          | L   | 0.747      | -            | -                | -                | -         |   -13.54 | Aerial, allu, HENU, juho, xseveN |
|            4 |     1881 | 2024-09-04 | Rhyno             | W   | 0.731      | 0.435        | 0.016 (0.005)    | 0.371 (0.118)    | 0 (0.000) |     8.57 | Aerial, allu, HENU, juho, xseveN |
|            3 |     1917 | 2024-09-03 | GUN5              | L   | 0.724      | -            | -                | -                | -         |    -9.24 | Aerial, allu, HENU, juho, xseveN |
|            2 |     2970 | 2024-08-03 | ENCE Academy      | W   | 0.519      | 0.143        | 0.009 (0.001)    | 0.239 (0.018)    | 1 (0.519) |     4.47 | Aerial, allu, HENU, juho, xseveN |
|            1 |     3032 | 2024-08-01 | Heimo             | W   | 0.507      | 0.143        | 0.001 (0.000)    | 0.148 (0.011)    | 1 (0.507) |     2.43 | Aerial, allu, HENU, juho, xseveN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,320.00)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-20 |      1.000 | $3,320.00      | $3,320.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
