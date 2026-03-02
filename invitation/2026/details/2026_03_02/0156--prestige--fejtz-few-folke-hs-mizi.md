### Roster Details<br />
Team Name: Prestige<br />
Roster: fejtZ, Few, Folke, HS, Mizi<br />
Global Rank: [156](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [111]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  786.3<br />
<br />
Final Rank Value (786.3) = Starting Rank Value (781.7) + Head To Head Adjustments (4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.314[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.7
- 400 + ( ( 0.202 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 781.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1606 | 2026-01-17 | megoshort     | L   | 0.905      | -            | -                | -                | -         |   -11.30 | fejtZ, Few, Folke, HS, Mizi       |
|            9 |     1626 | 2026-01-16 | STATE         | W   | 0.901      | 0.338        | 0.004 (0.001)    | 0.367 (0.111)    | 1 (0.901) |    21.39 | fejtZ, Few, Folke, HS, Mizi       |
|            8 |     1631 | 2026-01-16 | INFINITE      | L   | 0.900      | -            | -                | -                | -         |   -21.12 | fejtZ, Few, Folke, HS, Mizi       |
|            7 |     1641 | 2026-01-16 | AaB           | W   | 0.900      | 0.338        | 0.000 (0.000)    | 0.410 (0.124)    | 1 (0.900) |    19.44 | fejtZ, Few, Folke, HS, Mizi       |
|            6 |     1644 | 2026-01-16 | aimclub       | W   | 0.900      | 0.338        | 0.000 (0.000)    | 0.188 (0.057)    | 1 (0.900) |    11.89 | fejtZ, Few, Folke, HS, Mizi       |
|            5 |     1661 | 2026-01-16 | Johnny Speeds | L   | 0.899      | -            | -                | -                | -         |    -2.86 | fejtZ, Few, Folke, HS, Mizi       |
|            4 |     2635 | 2025-11-15 | AaB           | L   | 0.488      | -            | -                | -                | -         |    -9.11 | Few, Folke, Frøslev, Mizi, TorNEX |
|            3 |     3118 | 2025-11-02 | Nemesis       | L   | 0.398      | -            | -                | -                | -         |    -5.80 | Few, Folke, Frøslev, Mizi, TorNEX |
|            2 |     3135 | 2025-11-01 | MINLATE       | L   | 0.394      | -            | -                | -                | -         |    -2.37 | Few, Folke, Frøslev, Mizi, TorNEX |
|            1 |     3146 | 2025-11-01 | Phantom       | W   | 0.393      | 0.309        | 0.001 (0.000)    | 0.053 (0.007)    | 1 (0.393) |     4.45 | Few, Folke, Frøslev, Mizi, TorNEX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($479.16)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.488 | $389.00        | $189.92         |
| 2025-11-02 |      0.399 | $724.00        | $289.23         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
