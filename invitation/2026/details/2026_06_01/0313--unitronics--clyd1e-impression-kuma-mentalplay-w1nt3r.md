### Roster Details<br />
Team Name: Unitronics<br />
Roster: clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r<br />
Global Rank: [313](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  532.7<br />
<br />
Final Rank Value (532.7) = Starting Rank Value (537.5) + Head To Head Adjustments (-4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.5
- 400 + ( ( 0.072 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 537.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      962 | 2026-05-01 | BORING PLAYERS | L   | 0.997      | -            | -                | -                | -         |    -7.63 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |
|            4 |     1014 | 2026-04-30 | 5star          | L   | 0.990      | -            | -                | -                | -         |    -1.10 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |
|            3 |     1056 | 2026-04-30 | Legion         | W   | 0.984      | 0.471        | 0.001 (0.000)    | 0.145 (0.067)    | 1 (0.984) |    21.55 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |
|            2 |     2448 | 2026-03-28 | XDM            | L   | 0.771      | -            | -                | -                | -         |   -13.23 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |
|            1 |     2529 | 2026-03-27 | Just Swing     | L   | 0.764      | -            | -                | -                | -         |    -4.39 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
