### Roster Details<br />
Team Name: mouse<br />
Roster: Burglar, DYLAN, Jester, Jolts, Sunk<br />
Global Rank: [321](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [89]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  509.4<br />
<br />
Final Rank Value (509.4) = Starting Rank Value (492.4) + Head To Head Adjustments (17.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.4
- 400 + ( ( 0.047 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 492.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2474 | 2026-02-16 | LAG        | L   | 0.871      | -            | -                | -                | -         |    -2.16 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            6 |     2731 | 2026-02-10 | BOSS       | L   | 0.836      | -            | -                | -                | -         |    -6.15 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            5 |     2742 | 2026-02-10 | Passion UA | L   | 0.835      | -            | -                | -                | -         |    -0.22 | Burglar, duhpe, DYLAN, Jester, Sunk |
|            4 |     2785 | 2026-02-08 | F5         | W   | 0.822      | 0.143        | 0.002 (0.000)    | 0.202 (0.024)    | 0 (0.000) |    20.90 | DYLAN, Jester, Jolts, milo, Sunk    |
|            3 |     2852 | 2026-02-06 | regain     | L   | 0.809      | -            | -                | -                | -         |    -6.33 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            2 |     2885 | 2026-02-05 | Mythic     | W   | 0.801      | 0.333        | 0.001 (0.000)    | 0.044 (0.012)    | 0 (0.000) |    17.26 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            1 |     2961 | 2026-02-02 | regain     | L   | 0.782      | -            | -                | -                | -         |    -6.29 | Burglar, DYLAN, Jester, Jolts, Sunk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
