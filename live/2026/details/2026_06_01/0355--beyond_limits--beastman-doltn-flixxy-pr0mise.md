### Roster Details<br />
Team Name: Beyond Limits<br />
Roster: Beastman, doltn, flixxy, Pr0mise<br />
Global Rank: [355](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [97]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  425.3<br />
<br />
Final Rank Value (425.3) = Starting Rank Value (437.4) + Head To Head Adjustments (-12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.079[<sup>2</sup>](#table1)

The average of these factors is 0.020<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 437.4
- 400 + ( ( 0.020 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 437.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2476 | 2026-03-28 | Memeories    | L   | 0.768      | -            | -                | -                | -         |   -10.17 | Beastman, denz, doltn, flixxy, Pr0mise     |
|            4 |     2484 | 2026-03-28 | Oatzu's Hips | W   | 0.767      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.767) |    10.97 | Beastman, denz, doltn, flixxy, Pr0mise     |
|            3 |     2498 | 2026-03-28 | Memeories    | L   | 0.767      | -            | -                | -                | -         |   -10.48 | Beastman, denz, doltn, flixxy, Pr0mise     |
|            2 |     5816 | 2026-01-03 | Wildcard     | L   | 0.209      | -            | -                | -                | -         |    -2.45 | Beastman, doltn, flixxy, HAMBOOGA, Pr0mise |
|            1 |     5821 | 2026-01-03 | GamerLegion  | L   | 0.208      | -            | -                | -                | -         |    -0.00 | Beastman, doltn, flixxy, HAMBOOGA, Pr0mise |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
