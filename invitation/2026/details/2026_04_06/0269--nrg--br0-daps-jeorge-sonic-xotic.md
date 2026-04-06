### Roster Details<br />
Team Name: NRG<br />
Roster: br0, daps, Jeorge, Sonic, XotiC<br />
Global Rank: [269](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [67]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  620.1<br />
<br />
Final Rank Value (620.1) = Starting Rank Value (601.1) + Head To Head Adjustments (19.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 601.1
- 400 + ( ( 0.103 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 601.1


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
|            5 |     4248 | 2025-11-27 | Imperial          | L   | 0.334      | -            | -                | -                | -         |    -0.23 | br0, daps, Jeorge, Sonic, XotiC |
|            4 |     4259 | 2025-11-26 | fnatic            | L   | 0.328      | -            | -                | -                | -         |    -0.32 | br0, daps, Jeorge, Sonic, XotiC |
|            3 |     4275 | 2025-11-25 | M80               | L   | 0.321      | -            | -                | -                | -         |    -0.09 | br0, daps, Jeorge, Sonic, XotiC |
|            2 |     4296 | 2025-11-24 | FaZe              | W   | 0.316      | 0.624        | 0.374 (0.074)    | 0.350 (0.069)    | 1 (0.316) |     9.88 | br0, daps, Jeorge, Sonic, XotiC |
|            1 |     4320 | 2025-11-24 | Ninjas in Pyjamas | W   | 0.313      | 0.624        | 0.126 (0.025)    | 0.454 (0.089)    | 1 (0.313) |     9.77 | br0, daps, Jeorge, Sonic, XotiC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
