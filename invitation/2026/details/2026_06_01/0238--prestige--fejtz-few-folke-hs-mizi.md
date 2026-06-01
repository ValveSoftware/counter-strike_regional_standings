### Roster Details<br />
Team Name: Prestige<br />
Roster: fejtZ, Few, Folke, HS, Mizi<br />
Global Rank: [238](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [152]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  685.7<br />
<br />
Final Rank Value (685.7) = Starting Rank Value (673.4) + Head To Head Adjustments (12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.090[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.4
- 400 + ( ( 0.144 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 673.4


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
|            8 |     3217 | 2026-03-14 | Sashi         | L   | 0.673      | -            | -                | -                | -         |    -1.76 | Brillo, fejtZ, Few, Folke, niko |
|            7 |     3224 | 2026-03-14 | ECSTATIC      | L   | 0.672      | -            | -                | -                | -         |    -1.25 | Brillo, fejtZ, Few, Folke, niko |
|            6 |     5579 | 2026-01-17 | megoshort     | L   | 0.299      | -            | -                | -                | -         |    -2.27 | fejtZ, Few, Folke, HS, Mizi     |
|            5 |     5599 | 2026-01-16 | STATE         | W   | 0.294      | 0.338        | 0.020 (0.002)    | 0.632 (0.063)    | 1 (0.294) |     8.71 | fejtZ, Few, Folke, HS, Mizi     |
|            4 |     5604 | 2026-01-16 | INFINITE      | L   | 0.294      | -            | -                | -                | -         |    -6.15 | fejtZ, Few, Folke, HS, Mizi     |
|            3 |     5614 | 2026-01-16 | EAC           | W   | 0.293      | 0.338        | 0.011 (0.001)    | 0.768 (0.076)    | 1 (0.293) |     8.87 | fejtZ, Few, Folke, HS, Mizi     |
|            2 |     5617 | 2026-01-16 | aimclub       | W   | 0.293      | 0.338        | 0.000 (0.000)    | 0.307 (0.030)    | 1 (0.293) |     6.34 | fejtZ, Few, Folke, HS, Mizi     |
|            1 |     5634 | 2026-01-16 | Johnny Speeds | L   | 0.292      | -            | -                | -                | -         |    -0.25 | fejtZ, Few, Folke, HS, Mizi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($531.76)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.680 | $782.00        | $531.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
