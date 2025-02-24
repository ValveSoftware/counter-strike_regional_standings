### Roster Details<br />
Team Name: Latvia<br />
Roster: Frip, keen, prelideN, rud, shadiy<br />
Global Rank: [199](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [127]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  623.3<br />
<br />
Final Rank Value (623.3) = Starting Rank Value (606.2) + Head To Head Adjustments (17.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.180[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 606.2
- 400 + ( ( 0.108 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 606.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1403 | 2024-11-15 | Tunisia  | W   | 0.525      | 0.617        | 0.000 (0.000)    | 0.031 (0.010)    | 1 (0.525) |     4.27 | Frip, keen, prelideN, rud, shadiy |
|            4 |     1407 | 2024-11-15 | Nexus    | L   | 0.525      | -            | -                | -                | -         |    -1.12 | Frip, keen, prelideN, rud, shadiy |
|            3 |     1440 | 2024-11-14 | kONO     | W   | 0.519      | 0.617        | 0.019 (0.006)    | 0.460 (0.147)    | 1 (0.519) |    12.20 | Frip, keen, prelideN, rud, shadiy |
|            2 |     1443 | 2024-11-14 | Novaq    | L   | 0.519      | -            | -                | -                | -         |    -2.05 | Frip, keen, prelideN, rud, shadiy |
|            1 |     1449 | 2024-11-14 | USA      | W   | 0.518      | 0.617        | 0.000 (0.000)    | 0.006 (0.002)    | 1 (0.518) |     3.80 | Frip, keen, prelideN, rud, shadiy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
