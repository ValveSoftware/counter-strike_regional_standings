### Roster Details<br />
Team Name: Kubix<br />
Roster: ammar, gejmzilla, rosoneriii, tripey, v1w<br />
Global Rank: [104](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [75]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  755.3<br />
<br />
Final Rank Value (755.3) = Starting Rank Value (748.1) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.061[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 748.1
- 400 + ( ( 0.183 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 748.1


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
|            6 |     1114 | 2024-11-30 | Arrow          | L   | 0.625      | -            | -                | -                | -         |    -9.83 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            5 |     1159 | 2024-11-28 | Fire Flux      | L   | 0.612      | -            | -                | -                | -         |    -8.15 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            4 |     1185 | 2024-11-26 | GenOne         | W   | 0.599      | 0.372        | 0.008 (0.002)    | 0.573 (0.128)    | 0 (0.000) |     8.68 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            3 |     1387 | 2024-11-16 | Dark Cloud     | W   | 0.532      | 0.409        | 0.027 (0.006)    | 0.412 (0.090)    | 1 (0.532) |     8.51 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            2 |     1666 | 2024-11-05 | Kyoto          | W   | 0.459      | 0.366        | 0.011 (0.002)    | 0.025 (0.004)    | 0 (0.000) |     5.20 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            1 |     1829 | 2024-10-28 | Enterprise Gen | W   | 0.406      | 0.366        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.76 | ammar, gejmzilla, rosoneriii, tripey, v1w |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,551.93)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-16 |      0.532 | $21,730.00     | $11,551.93      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
