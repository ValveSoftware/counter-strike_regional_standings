### Roster Details<br />
Team Name: Prestige<br />
Roster: fejtZ, Few, Folke, HS, Mizi<br />
Global Rank: [283](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [182]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  609.9<br />
<br />
Final Rank Value (609.9) = Starting Rank Value (610.0) + Head To Head Adjustments (-0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.238[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 610.0
- 400 + ( ( 0.111 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 610.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3878 | 2026-03-14 | Sashi         | L   | 0.440      | -            | -                | -                | -         |    -0.98 | Brillo, fejtZ, Few, Folke, niko |
|            7 |     3885 | 2026-03-14 | ECSTATIC      | L   | 0.439      | -            | -                | -                | -         |    -1.44 | Brillo, fejtZ, Few, Folke, niko |
|            6 |     6240 | 2026-01-17 | megoshort     | L   | 0.066      | -            | -                | -                | -         |    -0.62 | fejtZ, Few, Folke, HS, Mizi     |
|            5 |     6260 | 2026-01-16 | STATE         | W   | 0.061      | 0.338        | 0.020 (0.000)    | 0.564 (0.012)    | 1 (0.061) |     1.87 | fejtZ, Few, Folke, HS, Mizi     |
|            4 |     6265 | 2026-01-16 | INFINITE      | L   | 0.061      | -            | -                | -                | -         |    -1.19 | fejtZ, Few, Folke, HS, Mizi     |
|            3 |     6275 | 2026-01-16 | AaB           | W   | 0.060      | 0.338        | 0.000 (0.000)    | 0.046 (0.001)    | 1 (0.060) |     0.73 | fejtZ, Few, Folke, HS, Mizi     |
|            2 |     6278 | 2026-01-16 | aimclub       | W   | 0.060      | 0.338        | 0.001 (0.000)    | 0.298 (0.006)    | 1 (0.060) |     1.60 | fejtZ, Few, Folke, HS, Mizi     |
|            1 |     6295 | 2026-01-16 | Johnny Speeds | L   | 0.059      | -            | -                | -                | -         |    -0.07 | fejtZ, Few, Folke, HS, Mizi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($349.49)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.447 | $782.00        | $349.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
