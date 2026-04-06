### Roster Details<br />
Team Name: GameHunters<br />
Roster: abr, diozera, mello, prt, RICIOLI<br />
Global Rank: [334](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [95]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  483.8<br />
<br />
Final Rank Value (483.8) = Starting Rank Value (481.7) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.166[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.7
- 400 + ( ( 0.042 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 481.7


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
|            9 |     5211 | 2025-10-26 | LP            | L   | 0.122      | -            | -                | -                | -         |    -0.21 | abr, prt, RICIOLI, s1cko, spinnie |
|            8 |     5268 | 2025-10-25 | MAGICOS       | W   | 0.115      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.40 | abr, Jerr1, prt, RICIOLI, spinnie |
|            7 |     5327 | 2025-10-24 | Keyd Stars    | L   | 0.109      | -            | -                | -                | -         |    -0.66 | abr, Jerr1, prt, RICIOLI, spinnie |
|            6 |     5380 | 2025-10-23 | Vasco         | W   | 0.102      | 0.363        | 0.002 (0.000)    | 0.272 (0.010)    | 0 (0.000) |     2.56 | abr, prt, RICIOLI, s1cko, spinnie |
|            5 |     5642 | 2025-10-13 | MIBR Academy  | L   | 0.035      | -            | -                | -                | -         |    -0.43 | abr, diozera, mello, prt, RICIOLI |
|            4 |     5644 | 2025-10-13 | Fuego         | L   | 0.035      | -            | -                | -                | -         |    -0.58 | abr, diozera, mello, prt, RICIOLI |
|            3 |     5670 | 2025-10-11 | FOLHA AMARELA | L   | 0.022      | -            | -                | -                | -         |    -0.12 | abr, diozera, mello, prt, RICIOLI |
|            2 |     5756 | 2025-10-09 | Vasco         | W   | 0.007      | 0.371        | 0.002 (0.000)    | 0.272 (0.001)    | 0 (0.000) |     0.18 | abr, diozera, mello, prt, RICIOLI |
|            1 |     5789 | 2025-10-08 | UNO MILLE     | L   | 0.002      | -            | -                | -                | -         |    -0.01 | abr, diozera, mello, prt, RICIOLI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
