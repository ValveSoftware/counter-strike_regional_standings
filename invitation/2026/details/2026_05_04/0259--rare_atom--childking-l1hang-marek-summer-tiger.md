### Roster Details<br />
Team Name: Rare Atom<br />
Roster: ChildKing, L1haNg, Marek, Summer, Tiger<br />
Global Rank: [259](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [34]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  633.3<br />
<br />
Final Rank Value (633.3) = Starting Rank Value (630.5) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 630.5
- 400 + ( ( 0.124 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 630.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     5376 | 2025-11-25 | GamerLegion  | L   | 0.134      | -            | -                | -                | -         |    -0.02 | ChildKing, L1haNg, Marek, Summer, Tiger |
|            6 |     5406 | 2025-11-24 | Legacy       | L   | 0.127      | -            | -                | -                | -         |    -0.02 | ChildKing, L1haNg, Marek, Summer, Tiger |
|            5 |     5423 | 2025-11-24 | Imperial     | L   | 0.126      | -            | -                | -                | -         |    -0.11 | ChildKing, L1haNg, Marek, Summer, Tiger |
|            4 |     5537 | 2025-11-20 | Lynn Vision  | L   | 0.101      | -            | -                | -                | -         |    -0.17 | ChildKing, L1haNg, Marek, Summer, Tiger |
|            3 |     5626 | 2025-11-16 | Lynn Vision  | L   | 0.071      | -            | -                | -                | -         |    -0.12 | ChildKing, L1haNg, Marek, Summer, Tiger |
|            2 |     5651 | 2025-11-14 | Gentle Mates | W   | 0.064      | 0.428        | 0.100 (0.003)    | 0.438 (0.012)    | 1 (0.064) |     1.96 | ChildKing, L1haNg, Marek, Summer, Tiger |
|            1 |     5702 | 2025-11-13 | Kaleido      | W   | 0.051      | 0.428        | 0.019 (0.000)    | 0.302 (0.007)    | 1 (0.051) |     1.31 | ChildKing, L1haNg, Marek, Summer, Tiger |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($699.31)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-16 |      0.071 | $9,830.00      | $699.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
