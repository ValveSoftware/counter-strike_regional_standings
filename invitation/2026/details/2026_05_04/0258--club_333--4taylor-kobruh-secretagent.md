### Roster Details<br />
Team Name: Club 333<br />
Roster: 4TAYLOR, kobruh, SecretAgent<br />
Global Rank: [258](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [63]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  633.9<br />
<br />
Final Rank Value (633.9) = Starting Rank Value (615.7) + Head To Head Adjustments (18.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.228[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 615.7
- 400 + ( ( 0.116 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 615.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      808 | 2026-04-05 | FarmVille    | L   | 1.000      | -            | -                | -                | -         |    -9.77 | 4TAYLOR, kobruh, Majesticzz, Marro, SecretAgent   |
|            5 |      866 | 2026-04-04 | TSG          | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.033 (0.012)    | 0 (0.000) |    10.82 | 4TAYLOR, kobruh, Majesticzz, Marro, SecretAgent   |
|            4 |      952 | 2026-04-03 | Shimmer      | W   | 0.995      | 0.363        | 0.010 (0.004)    | 0.074 (0.027)    | 0 (0.000) |    14.42 | 4TAYLOR, kobruh, Majesticzz, Marro, SecretAgent   |
|            3 |     1030 | 2026-04-02 | LAG          | L   | 0.990      | -            | -                | -                | -         |    -2.72 | 4TAYLOR, kobruh, Majesticzz, Marro, SecretAgent   |
|            2 |     4992 | 2025-12-14 | LAG          | L   | 0.262      | -            | -                | -                | -         |    -0.69 | 4TAYLOR, freakazoid, HorizoN, kobruh, SecretAgent |
|            1 |     5019 | 2025-12-12 | Chicken Coop | W   | 0.249      | 0.278        | 0.016 (0.001)    | 0.260 (0.018)    | 0 (0.000) |     6.21 | 4TAYLOR, freakazoid, HorizoN, kobruh, SecretAgent |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($196.47)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      0.262 | $750.00        | $196.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
