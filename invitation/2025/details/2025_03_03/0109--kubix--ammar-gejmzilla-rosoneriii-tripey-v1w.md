### Roster Details<br />
Team Name: Kubix<br />
Roster: ammar, gejmzilla, rosoneriii, tripey, v1w<br />
Global Rank: [109](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [74]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  755.1<br />
<br />
Final Rank Value (755.1) = Starting Rank Value (748.6) + Head To Head Adjustments (6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.400[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.057[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 748.6
- 400 + ( ( 0.181 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 748.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1202 | 2024-11-30 | Arrow          | L   | 0.580      | -            | -                | -                | -         |    -9.07 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            5 |     1247 | 2024-11-28 | Fire Flux      | L   | 0.567      | -            | -                | -                | -         |    -7.54 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            4 |     1273 | 2024-11-26 | GenOne         | W   | 0.554      | 0.372        | 0.008 (0.002)    | 0.538 (0.111)    | 0 (0.000) |     8.07 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            3 |     1475 | 2024-11-16 | Dark Cloud     | W   | 0.486      | 0.409        | 0.027 (0.005)    | 0.387 (0.077)    | 1 (0.486) |     7.81 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            2 |     1754 | 2024-11-05 | Kyoto          | W   | 0.414      | 0.366        | 0.011 (0.002)    | 0.022 (0.003)    | 0 (0.000) |     4.69 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            1 |     1917 | 2024-10-28 | Enterprise Gen | W   | 0.361      | 0.366        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.47 | ammar, gejmzilla, rosoneriii, tripey, v1w |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,567.38)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-16 |      0.486 | $21,730.00     | $10,567.38      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
