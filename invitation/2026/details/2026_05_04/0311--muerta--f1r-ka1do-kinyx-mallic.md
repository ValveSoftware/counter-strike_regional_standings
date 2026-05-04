### Roster Details<br />
Team Name: MUERTA<br />
Roster: f1R, ka1do, kinyx, MaLLiC<br />
Global Rank: [311](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [190]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  533.6<br />
<br />
Final Rank Value (533.6) = Starting Rank Value (520.2) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.2
- 400 + ( ( 0.065 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 520.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2444 | 2026-03-09 | Oxuji           | L   | 0.828      | -            | -                | -                | -         |    -1.70 | abdr, f1R, ka1do, kinyx, MaLLiC    |
|            4 |     2463 | 2026-03-09 | WW              | L   | 0.827      | -            | -                | -                | -         |    -0.93 | abdr, f1R, ka1do, kinyx, MaLLiC    |
|            3 |     2717 | 2026-03-04 | 1win            | L   | 0.795      | -            | -                | -                | -         |    -0.36 | f1R, ka1do, kinyx, MaLLiC, web_sun |
|            2 |     2727 | 2026-03-04 | eternal premium | W   | 0.794      | 0.333        | 0.001 (0.000)    | 0.118 (0.031)    | 1 (0.794) |    16.75 | f1R, ka1do, kinyx, MaLLiC, web_sun |
|            1 |     2755 | 2026-03-04 | TDK             | L   | 0.792      | -            | -                | -                | -         |    -0.37 | f1R, ka1do, kinyx, MaLLiC, web_sun |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
