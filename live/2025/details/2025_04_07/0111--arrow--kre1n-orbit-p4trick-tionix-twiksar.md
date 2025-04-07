### Roster Details<br />
Team Name: Arrow<br />
Roster: Kre1N, Orbit, P4TriCK, Tionix, Twiksar<br />
Global Rank: [111](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [72]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  725.4<br />
<br />
Final Rank Value (725.4) = Starting Rank Value (710.7) + Head To Head Adjustments (14.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.047[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.7
- 400 + ( ( 0.169 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 710.7


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
|            6 |     1845 | 2024-12-14 | BIG             | W   | 0.441      | 0.332        | 0.206 (0.030)    | 0.415 (0.061)    | 1 (0.441) |    12.88 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            5 |     2085 | 2024-12-02 | Partizan        | L   | 0.362      | -            | -                | -                | -         |    -1.70 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            4 |     2137 | 2024-11-30 | Kubix           | W   | 0.347      | 0.372        | 0.020 (0.003)    | 0.101 (0.013)    | 0 (0.000) |     5.26 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            3 |     2211 | 2024-11-26 | 1win            | L   | 0.321      | -            | -                | -                | -         |    -5.83 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            2 |     2722 | 2024-11-03 | ALTERNATE aTTaX | W   | 0.167      | 0.143        | 0.013 (0.000)    | 0.146 (0.003)    | 0 (0.000) |     2.86 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            1 |     2728 | 2024-11-03 | XPERION NXT     | W   | 0.167      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.21 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,698.43)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-14 |      0.441 | $6,122.00      | $2,698.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
