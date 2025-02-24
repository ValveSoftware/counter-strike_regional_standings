### Roster Details<br />
Team Name: ADEPTS<br />
Roster: cHeuuuuk, Chucky, HippoV, SBT, Tarkky<br />
Global Rank: [264](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [150]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  503.7<br />
<br />
Final Rank Value (503.7) = Starting Rank Value (501.0) + Head To Head Adjustments (2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.0
- 400 + ( ( 0.053 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 501.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      712 | 2024-12-22 | WOPA            | L   | 0.772      | -            | -                | -                | -         |    -3.96 | cHeuuuuk, Chucky, HippoV, SBT, Tarkky   |
|            7 |      728 | 2024-12-21 | kONO            | L   | 0.764      | -            | -                | -                | -         |    -4.89 | cHeuuuuk, Chucky, SBT, Tarkky, xReal    |
|            6 |      750 | 2024-12-19 | Preasy          | W   | 0.751      | 0.333        | 0.006 (0.001)    | 0.211 (0.053)    | 0 (0.000) |    16.79 | cHeuuuuk, Chucky, HippoV, SBT, Tarkky   |
|            5 |     1997 | 2024-10-19 | Viperio         | L   | 0.344      | -            | -                | -                | -         |    -3.55 | cHeuuuuk, Chucky, Oxbrandd, SBT, Tarkky |
|            4 |     2028 | 2024-10-18 | Chimera         | L   | 0.337      | -            | -                | -                | -         |    -1.56 | cHeuuuuk, Chucky, Oxbrandd, prn, Tarkky |
|            3 |     3109 | 2024-09-14 | Astralis Talent | L   | 0.111      | -            | -                | -                | -         |    -0.82 | cHeuuuuk, Chucky, Oxbrandd, prn, Tarkky |
|            2 |     3150 | 2024-09-13 | Spirit Academy  | L   | 0.103      | -            | -                | -                | -         |    -0.31 | cHeuuuuk, Chucky, Oxbrandd, prn, Tarkky |
|            1 |     3242 | 2024-09-10 | 9INE Academy    | W   | 0.084      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.96 | cHeuuuuk, Chucky, Oxbrandd, prn, Tarkky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
