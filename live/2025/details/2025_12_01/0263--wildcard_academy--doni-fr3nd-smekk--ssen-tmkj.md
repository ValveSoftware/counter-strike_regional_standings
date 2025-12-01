### Roster Details<br />
Team Name: Wildcard Academy<br />
Roster: doni, fr3nd, smekk-, sSen, TMKj<br />
Global Rank: [263](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [149]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  503.1<br />
<br />
Final Rank Value (503.1) = Starting Rank Value (498.5) + Head To Head Adjustments (4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.5
- 400 + ( ( 0.052 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 498.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4187 | 2025-07-09 | ComeBack       | L   | 0.234      | -            | -                | -                | -         |    -2.04 | doni, fr3nd, smekk-, sSen, TMKj |
|            4 |     4227 | 2025-07-07 | Dziuseppe      | L   | 0.220      | -            | -                | -                | -         |    -1.17 | doni, fr3nd, smekk-, sSen, TMKj |
|            3 |     4242 | 2025-07-05 | TPuDCATb TPu   | L   | 0.205      | -            | -                | -                | -         |    -0.32 | doni, fr3nd, smekk-, sSen, TMKj |
|            2 |     4247 | 2025-07-03 | Fire Flux      | W   | 0.194      | 0.486        | 0.010 (0.001)    | 0.786 (0.074)    | 0 (0.000) |     5.23 | doni, fr3nd, smekk-, sSen, TMKj |
|            1 |     4263 | 2025-07-01 | Fisher College | W   | 0.180      | 0.486        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     2.89 | doni, fr3nd, smekk-, sSen, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
