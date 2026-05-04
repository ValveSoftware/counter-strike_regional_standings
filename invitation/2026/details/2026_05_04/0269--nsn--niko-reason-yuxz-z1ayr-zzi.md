### Roster Details<br />
Team Name: NSN<br />
Roster: Niko, reason, Yuxz, z1ayr, zzi<br />
Global Rank: [269](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [35]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  606.9<br />
<br />
Final Rank Value (606.9) = Starting Rank Value (541.8) + Head To Head Adjustments (65.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.8
- 400 + ( ( 0.076 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 541.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      793 | 2026-04-06 | NEXVOID           | L   | 1.000      | -            | -                | -                | -         |    -1.63 | Niko, reason, Yuxz, z1ayr, zzi |
|            6 |      843 | 2026-04-05 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |    -1.88 | Niko, reason, Yuxz, z1ayr, zzi |
|            5 |      991 | 2026-04-03 | The QUBE          | W   | 0.993      | 0.333        | 0.007 (0.002)    | 0.313 (0.104)    | 0 (0.000) |    26.10 | Niko, reason, Yuxz, z1ayr, zzi |
|            4 |     1101 | 2026-04-02 | NEXVOID           | W   | 0.986      | 0.333        | 0.021 (0.007)    | 0.482 (0.158)    | 0 (0.000) |    29.61 | Niko, reason, Yuxz, z1ayr, zzi |
|            3 |     1846 | 2026-03-22 | Haunted House     | L   | 0.913      | -            | -                | -                | -         |    -8.49 | Niko, reason, Yuxz, z1ayr, zzi |
|            2 |     1905 | 2026-03-21 | FengDa            | L   | 0.906      | -            | -                | -                | -         |    -5.75 | Niko, reason, Yuxz, z1ayr, zzi |
|            1 |     1968 | 2026-03-20 | Chinggis Warriors | W   | 0.899      | 0.333        | 0.022 (0.007)    | 0.543 (0.163)    | 0 (0.000) |    27.14 | Niko, reason, Yuxz, z1ayr, zzi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
