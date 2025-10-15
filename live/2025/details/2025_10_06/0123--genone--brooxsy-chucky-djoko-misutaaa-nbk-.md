### Roster Details<br />
Team Name: GenOne<br />
Roster: Brooxsy, Chucky, Djoko, misutaaa, NBK-<br />
Global Rank: [123](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [79]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  773.6<br />
<br />
Final Rank Value (773.6) = Starting Rank Value (710.2) + Head To Head Adjustments (63.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.308[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.2
- 400 + ( ( 0.158 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 710.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      225 | 2025-09-27 | Passion UA    | L   | 1.000      | -            | -                | -                | -         |    -0.79 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            4 |      253 | 2025-09-26 | FlyQuest      | W   | 1.000      | 0.339        | 0.066 (0.022)    | 0.311 (0.105)    | 1 (1.000) |    29.58 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            3 |      277 | 2025-09-26 | Reason        | W   | 1.000      | 0.339        | 0.006 (0.002)    | 0.960 (0.326)    | 1 (1.000) |    26.53 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            2 |      304 | 2025-09-25 | MANA          | W   | 1.000      | 0.339        | 0.000 (0.000)    | 0.161 (0.054)    | 1 (1.000) |    11.19 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            1 |      319 | 2025-09-25 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |    -3.10 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
