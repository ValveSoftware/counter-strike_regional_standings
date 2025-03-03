### Roster Details<br />
Team Name: ADEPTS<br />
Roster: cHeuuuuk, Chucky, HippoV, SBT, Tarkky<br />
Global Rank: [269](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [149]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  504.6<br />
<br />
Final Rank Value (504.6) = Starting Rank Value (501.8) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.8
- 400 + ( ( 0.053 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 501.8


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
|            8 |      800 | 2024-12-22 | WOPA            | L   | 0.726      | -            | -                | -                | -         |    -3.78 | cHeuuuuk, Chucky, HippoV, SBT, Tarkky   |
|            7 |      816 | 2024-12-21 | kONO            | L   | 0.719      | -            | -                | -                | -         |    -4.63 | cHeuuuuk, Chucky, SBT, Tarkky, xReal    |
|            6 |      838 | 2024-12-19 | Preasy          | W   | 0.706      | 0.333        | 0.006 (0.001)    | 0.204 (0.048)    | 0 (0.000) |    15.87 | cHeuuuuk, Chucky, HippoV, SBT, Tarkky   |
|            5 |     2085 | 2024-10-19 | Viperio         | L   | 0.299      | -            | -                | -                | -         |    -3.07 | cHeuuuuk, Chucky, Oxbrandd, SBT, Tarkky |
|            4 |     2116 | 2024-10-18 | Chimera         | L   | 0.291      | -            | -                | -                | -         |    -1.37 | cHeuuuuk, Chucky, Oxbrandd, prn, Tarkky |
|            3 |     3197 | 2024-09-14 | Astralis Talent | L   | 0.065      | -            | -                | -                | -         |    -0.49 | cHeuuuuk, Chucky, Oxbrandd, prn, Tarkky |
|            2 |     3238 | 2024-09-13 | Spirit Academy  | L   | 0.058      | -            | -                | -                | -         |    -0.18 | cHeuuuuk, Chucky, Oxbrandd, prn, Tarkky |
|            1 |     3330 | 2024-09-10 | 9INE Academy    | W   | 0.039      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.44 | cHeuuuuk, Chucky, Oxbrandd, prn, Tarkky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
