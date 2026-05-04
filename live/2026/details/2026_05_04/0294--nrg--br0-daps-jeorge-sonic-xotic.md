### Roster Details<br />
Team Name: NRG<br />
Roster: br0, daps, Jeorge, Sonic, XotiC<br />
Global Rank: [294](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  565.0<br />
<br />
Final Rank Value (565.0) = Starting Rank Value (557.3) + Head To Head Adjustments (7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.085<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 557.3
- 400 + ( ( 0.085 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 557.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5345 | 2025-11-27 | Imperial          | L   | 0.147      | -            | -                | -                | -         |    -0.09 | br0, daps, Jeorge, Sonic, XotiC |
|            4 |     5356 | 2025-11-26 | fnatic            | L   | 0.141      | -            | -                | -                | -         |    -0.18 | br0, daps, Jeorge, Sonic, XotiC |
|            3 |     5372 | 2025-11-25 | M80               | L   | 0.134      | -            | -                | -                | -         |    -0.04 | br0, daps, Jeorge, Sonic, XotiC |
|            2 |     5393 | 2025-11-24 | FaZe              | W   | 0.129      | 0.624        | 0.563 (0.045)    | 0.366 (0.029)    | 1 (0.129) |     4.04 | br0, daps, Jeorge, Sonic, XotiC |
|            1 |     5417 | 2025-11-24 | Ninjas in Pyjamas | W   | 0.126      | 0.624        | 0.125 (0.010)    | 0.460 (0.036)    | 1 (0.126) |     3.94 | br0, daps, Jeorge, Sonic, XotiC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
