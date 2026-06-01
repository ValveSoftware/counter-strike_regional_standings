### Roster Details<br />
Team Name: Memeories<br />
Roster: AEROj, fatguy, Slugy<br />
Global Rank: [334](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [87]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  494.3<br />
<br />
Final Rank Value (494.3) = Starting Rank Value (475.4) + Head To Head Adjustments (18.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.157[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 475.4
- 400 + ( ( 0.040 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 475.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2457 | 2026-03-28 | Fisher College | L   | 0.769      | -            | -                | -                | -         |    -0.57 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            5 |     2476 | 2026-03-28 | Beyond Limits  | W   | 0.768      | 0.354        | 0.000 (0.000)    | 0.026 (0.007)    | 1 (0.768) |    10.17 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            4 |     2488 | 2026-03-28 | Voca           | L   | 0.767      | -            | -                | -                | -         |    -0.27 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            3 |     2498 | 2026-03-28 | Beyond Limits  | W   | 0.767      | 0.354        | 0.000 (0.000)    | 0.026 (0.007)    | 1 (0.767) |    10.48 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            2 |     5813 | 2026-01-03 | F5             | L   | 0.210      | -            | -                | -                | -         |    -0.50 | AEROj, fatguy, Fezera, Slugy, Tiski |
|            1 |     5819 | 2026-01-03 | 9INE           | L   | 0.208      | -            | -                | -                | -         |    -0.47 | AEROj, fatguy, Fezera, Slugy, Tiski |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
