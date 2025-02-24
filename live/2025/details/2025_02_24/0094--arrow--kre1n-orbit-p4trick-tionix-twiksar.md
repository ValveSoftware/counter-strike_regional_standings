### Roster Details<br />
Team Name: Arrow<br />
Roster: Kre1N, Orbit, P4TriCK, Tionix, Twiksar<br />
Global Rank: [94](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [68]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  787.8<br />
<br />
Final Rank Value (787.8) = Starting Rank Value (760.7) + Head To Head Adjustments (27.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.083[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 760.7
- 400 + ( ( 0.189 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 760.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      822 | 2024-12-14 | BIG             | W   | 0.719      | 0.332        | 0.228 (0.054)    | 0.644 (0.154)    | 1 (0.719) |    21.76 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            5 |     1062 | 2024-12-02 | Partizan        | L   | 0.640      | -            | -                | -                | -         |    -3.35 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            4 |     1114 | 2024-11-30 | Kubix           | W   | 0.625      | 0.372        | 0.031 (0.007)    | 0.119 (0.028)    | 0 (0.000) |     9.83 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            3 |     1188 | 2024-11-26 | 1WIN            | L   | 0.599      | -            | -                | -                | -         |   -12.46 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            2 |     1699 | 2024-11-03 | ALTERNATE aTTaX | W   | 0.446      | 0.143        | 0.020 (0.001)    | 0.416 (0.027)    | 0 (0.000) |     8.61 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            1 |     1705 | 2024-11-03 | XPERION NXT     | W   | 0.445      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.70 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,402.53)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-14 |      0.719 | $6,122.00      | $4,402.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
