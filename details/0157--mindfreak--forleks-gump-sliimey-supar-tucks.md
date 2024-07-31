### Roster Details<br />
Team Name: Mindfreak<br />
Roster: Forleks, gump, Sliimey, supar, tucks<br />
Global Rank: [157](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [14]( ../standings_asia.md)<br />
<br />
Final Rank Value:  693.1<br />
<br />
Final Rank Value (693.1) = Starting Rank Value (670.1) + Head To Head Adjustments (23.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.1
- 400 + ( ( 0.131 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 670.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2834 | 2024-04-10 | DXA                | W   | 0.450      | 0.333        | 0.002 (0.000)    | 0.228 (0.034)    | 0 (0.000) |     6.66 | Forleks, gump, Sliimey, supar, tucks |
|           11 |     2841 | 2024-04-10 | DXA                | W   | 0.450      | 0.333        | 0.002 (0.000)    | 0.228 (0.034)    | 0 (0.000) |     6.93 | Forleks, gump, Sliimey, supar, tucks |
|           10 |     3066 | 2024-04-03 | Canon Event        | W   | 0.404      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.38 | Forleks, gump, Sliimey, supar, tucks |
|            9 |     3070 | 2024-04-03 | Canon Event        | W   | 0.403      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.48 | Forleks, gump, Sliimey, supar, tucks |
|            8 |     3191 | 2024-03-27 | Bad News Kangaroos | W   | 0.357      | 0.333        | 0.017 (0.002)    | 0.112 (0.013)    | 0 (0.000) |     7.44 | Forleks, gump, Sliimey, supar, tucks |
|            7 |     3198 | 2024-03-27 | Bad News Kangaroos | L   | 0.357      | -            | -                | -                | -         |    -3.86 | Forleks, gump, Sliimey, supar, tucks |
|            6 |     3638 | 2024-03-06 | Rooster            | L   | 0.217      | -            | -                | -                | -         |    -2.32 | Forleks, gump, Sliimey, supar, tucks |
|            5 |     3645 | 2024-03-06 | Rooster            | L   | 0.217      | -            | -                | -                | -         |    -2.36 | Forleks, gump, Sliimey, supar, tucks |
|            4 |     3940 | 2024-02-21 | KZG                | W   | 0.124      | 0.333        | 0.006 (0.000)    | 0.113 (0.005)    | 0 (0.000) |     2.15 | Forleks, gump, Sliimey, supar, tucks |
|            3 |     3947 | 2024-02-21 | KZG                | W   | 0.124      | 0.333        | 0.006 (0.000)    | 0.113 (0.005)    | 0 (0.000) |     2.17 | Forleks, gump, Sliimey, supar, tucks |
|            2 |     4141 | 2024-02-14 | KZG                | L   | 0.077      | -            | -                | -                | -         |    -1.06 | deStiny, gump, Sliimey, supar, tucks |
|            1 |     4164 | 2024-02-13 | DEMESIS            | W   | 0.070      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.40 | deStiny, gump, Sliimey, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,190.14)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
