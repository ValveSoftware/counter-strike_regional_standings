### Roster Details<br />
Team Name: Leça<br />
Roster: h0t, M1KA, opdust, snowiee, SYDOX<br />
Global Rank: [101](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [66]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  793.8<br />
<br />
Final Rank Value (793.8) = Starting Rank Value (781.1) + Head To Head Adjustments (12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.227[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.1
- 400 + ( ( 0.204 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 781.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      817 | 2025-05-11 | Rhyno        | L   | 0.819      | -            | -                | -                | -         |   -14.37 | h0t, M1KA, opdust, snowiee, SYDOX |
|            4 |      850 | 2025-05-10 | Iberian Soul | W   | 0.812      | 0.316        | 0.077 (0.020)    | 0.974 (0.249)    | 1 (0.812) |    19.69 | h0t, M1KA, opdust, snowiee, SYDOX |
|            3 |      870 | 2025-05-09 | The Animals  | W   | 0.806      | 0.316        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.806) |     4.30 | h0t, M1KA, opdust, snowiee, SYDOX |
|            2 |     2392 | 2025-03-16 | Iberian Soul | L   | 0.447      | -            | -                | -                | -         |    -3.27 | h0t, M1KA, opdust, snowiee, ZPX   |
|            1 |     2410 | 2025-03-15 | Rhyno        | W   | 0.440      | 0.306        | 0.005 (0.001)    | 0.108 (0.015)    | 1 (0.440) |     6.35 | h0t, M1KA, opdust, snowiee, ZPX   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,874.36)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.819 | $1,697.00      | $1,390.19       |
| 2025-03-16 |      0.447 | $1,084.00      | $484.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
