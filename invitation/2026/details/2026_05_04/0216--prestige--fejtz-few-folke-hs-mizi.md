### Roster Details<br />
Team Name: Prestige<br />
Roster: fejtZ, Few, Folke, HS, Mizi<br />
Global Rank: [216](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [138]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  729.7<br />
<br />
Final Rank Value (729.7) = Starting Rank Value (709.6) + Head To Head Adjustments (20.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.146[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.6
- 400 + ( ( 0.167 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 709.6


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
|            8 |     2231 | 2026-03-14 | Sashi         | L   | 0.859      | -            | -                | -                | -         |    -2.81 | Brillo, fejtZ, Few, Folke, niko |
|            7 |     2238 | 2026-03-14 | ECSTATIC      | L   | 0.858      | -            | -                | -                | -         |    -1.39 | Brillo, fejtZ, Few, Folke, niko |
|            6 |     4593 | 2026-01-17 | megoshort     | L   | 0.485      | -            | -                | -                | -         |    -3.46 | fejtZ, Few, Folke, HS, Mizi     |
|            5 |     4613 | 2026-01-16 | STATE         | W   | 0.481      | 0.338        | 0.015 (0.002)    | 0.641 (0.104)    | 1 (0.481) |    13.46 | fejtZ, Few, Folke, HS, Mizi     |
|            4 |     4618 | 2026-01-16 | INFINITE      | L   | 0.481      | -            | -                | -                | -         |   -10.84 | fejtZ, Few, Folke, HS, Mizi     |
|            3 |     4628 | 2026-01-16 | AaB           | W   | 0.480      | 0.338        | 0.014 (0.002)    | 0.847 (0.137)    | 1 (0.480) |    14.48 | fejtZ, Few, Folke, HS, Mizi     |
|            2 |     4631 | 2026-01-16 | aimclub       | W   | 0.480      | 0.338        | 0.000 (0.000)    | 0.381 (0.062)    | 1 (0.480) |    11.12 | fejtZ, Few, Folke, HS, Mizi     |
|            1 |     4648 | 2026-01-16 | Johnny Speeds | L   | 0.479      | -            | -                | -                | -         |    -0.43 | fejtZ, Few, Folke, HS, Mizi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($677.66)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.867 | $782.00        | $677.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
