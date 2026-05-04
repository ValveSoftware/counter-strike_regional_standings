### Roster Details<br />
Team Name: kONO<br />
Roster: birdfromsky, Burmylov, cptkurtka023, Keoz<br />
Global Rank: [330](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [198]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  483.6<br />
<br />
Final Rank Value (483.6) = Starting Rank Value (481.1) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.1
- 400 + ( ( 0.044 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 481.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5247 | 2025-11-30 | FORZE Reload | L   | 0.167      | -            | -                | -                | -         |    -1.09 | birdfromsky, Burmylov, cptkurtka023, Keoz, OWNER |
|            4 |     5299 | 2025-11-29 | FUT          | L   | 0.159      | -            | -                | -                | -         |    -0.00 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|            3 |     5366 | 2025-11-26 | MANA         | W   | 0.138      | 0.371        | 0.003 (0.000)    | 0.827 (0.042)    | 0 (0.000) |     4.05 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|            2 |     5477 | 2025-11-22 | Oramond      | L   | 0.112      | -            | -                | -                | -         |    -0.42 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |
|            1 |     6025 | 2025-11-05 | NOVAQ        | L   | 0.000      | -            | -                | -                | -         |     0.00 | b0RUP, birdfromsky, Burmylov, cptkurtka023, Keoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
