### Roster Details<br />
Team Name: SPARTA<br />
Roster: Djon8, k4nfuz, Krad, Norwi, yuramyata<br />
Global Rank: [292](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [183]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  567.6<br />
<br />
Final Rank Value (567.6) = Starting Rank Value (545.5) + Head To Head Adjustments (22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 545.5
- 400 + ( ( 0.078 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 545.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     2399 | 2026-03-10 | 5Actors    | L   | 0.834      | -            | -                | -                | -         |   -16.68 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            7 |     2408 | 2026-03-10 | Nemiga     | L   | 0.833      | -            | -                | -                | -         |    -0.45 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            6 |     2824 | 2026-03-02 | WW         | L   | 0.781      | -            | -                | -                | -         |    -0.92 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            5 |     2929 | 2026-02-28 | AM         | L   | 0.765      | -            | -                | -                | -         |    -0.92 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            4 |     3035 | 2026-02-26 | Lazer Cats | L   | 0.752      | -            | -                | -                | -         |    -2.54 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            3 |     3069 | 2026-02-25 | ASTRAL     | W   | 0.748      | 0.435        | 0.012 (0.004)    | 0.777 (0.252)    | 0 (0.000) |    21.94 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            2 |     3232 | 2026-02-22 | MOUZ NXT   | W   | 0.726      | 0.435        | 0.028 (0.009)    | 1.000 (0.316)    | 0 (0.000) |    22.14 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            1 |     3304 | 2026-02-21 | WW         | L   | 0.719      | -            | -                | -                | -         |    -0.43 | Djon8, k4nfuz, Krad, Norwi, yuramyata |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
